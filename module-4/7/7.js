// Get a subscription key from https://digitransit.fi/en/developers/api-registration/
// Paste it below or add it to the page URL: 7.html?key=YOUR_KEY
const API_KEY = new URLSearchParams(window.location.search).get("key") ?? "your key here";

const ROUTING_URL = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";
const GEOCODING_URL = "https://api.digitransit.fi/geocoding/v1/search";
const DESTINATION = {
    latitude: 60.2237581,
    longitude: 24.7581222,
    label: "Karaportti 2",
};

const map = L.map("map").setView([DESTINATION.latitude, DESTINATION.longitude], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const routeLayer = L.layerGroup().addTo(map);

const form = document.getElementById("route-form");
const addressInput = document.getElementById("address");
const resultElement = document.getElementById("result");

function formatTime(time) {
    return new Date(time).toLocaleTimeString("fi-FI", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

async function getCoordinates(address) {
    const response = await fetch(`${GEOCODING_URL}?text=${encodeURIComponent(address)}&size=1`, {
        headers: {
            "digitransit-subscription-key": API_KEY,
        },
    });
    const data = await response.json();

    if (!data.features || data.features.length === 0) {
        return null;
    }

    const [longitude, latitude] = data.features[0].geometry.coordinates;

    return {
        latitude,
        longitude,
        label: data.features[0].properties.label,
    };
}

async function getRoute(origin) {
    const query = `{
        plan(
            from: {lat: ${origin.latitude}, lon: ${origin.longitude}}
            to: {lat: ${DESTINATION.latitude}, lon: ${DESTINATION.longitude}}
            numItineraries: 1
        ) {
            itineraries {
                startTime
                endTime
                legs {
                    mode
                    legGeometry {
                        points
                    }
                }
            }
        }
    }`;

    const response = await fetch(ROUTING_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "digitransit-subscription-key": API_KEY,
        },
        body: JSON.stringify({ query }),
    });
    const data = await response.json();

    if (!data.data?.plan?.itineraries?.length) {
        return null;
    }

    return data.data.plan.itineraries[0];
}

function drawRoute(itinerary, origin) {
    routeLayer.clearLayers();

    L.marker([origin.latitude, origin.longitude]).addTo(routeLayer).bindPopup(origin.label);
    L.marker([DESTINATION.latitude, DESTINATION.longitude]).addTo(routeLayer).bindPopup(DESTINATION.label);

    for (const leg of itinerary.legs) {
        let color = "blue";

        switch (leg.mode) {
            case "WALK":
                color = "green";
                break;
            case "BUS":
                color = "red";
                break;
            case "RAIL":
                color = "cyan";
                break;
            case "TRAM":
                color = "magenta";
                break;
        }

        const points = L.Polyline.fromEncoded(leg.legGeometry.points).getLatLngs()[0];
        L.polyline(points, { color }).addTo(routeLayer);
    }

    map.fitBounds([
        [origin.latitude, origin.longitude],
        [DESTINATION.latitude, DESTINATION.longitude],
    ]);
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (API_KEY === "your key here") {
        resultElement.textContent = "Add your Digitransit subscription key to 7.js.";
        return;
    }

    const address = addressInput.value.trim();

    if (!address) {
        return;
    }

    resultElement.textContent = "Searching for the route...";

    try {
        const origin = await getCoordinates(address);

        if (!origin) {
            resultElement.textContent = "The address was not found.";
            return;
        }

        const itinerary = await getRoute(origin);

        if (!itinerary) {
            resultElement.textContent = "No route was found.";
            return;
        }

        drawRoute(itinerary, origin);

        resultElement.textContent =
            `${origin.label} - ${DESTINATION.label}: ` +
            `${formatTime(itinerary.startTime)} - ${formatTime(itinerary.endTime)}`;
    } catch (error) {
        console.error(error);
        resultElement.textContent = "The route search failed.";
    }
});
