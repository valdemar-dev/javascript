const form = document.getElementById("search-form");
const queryInput = document.getElementById("query");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const query = queryInput.value.trim();

    if (!query) {
        return;
    }

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const searchResults = await response.json();

    console.log(searchResults);
});
