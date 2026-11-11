const form = document.getElementById("search-form");
const queryInput = document.getElementById("query");
const resultsElement = document.getElementById("results");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const query = queryInput.value.trim();

    if (!query) {
        return;
    }

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const searchResults = await response.json();

    resultsElement.innerHTML = "";

    for (const result of searchResults) {
        const show = result.show;

        const article = document.createElement("article");

        const heading = document.createElement("h2");
        heading.textContent = show.name;

        const link = document.createElement("a");
        link.href = show.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = show.url;

        const image = document.createElement("img");
        image.src = show.image?.medium ?? "";
        image.alt = show.name;

        const summary = document.createElement("div");
        summary.innerHTML = show.summary ?? "";

        article.append(heading, link, image, summary);
        resultsElement.appendChild(article);
    }
});
