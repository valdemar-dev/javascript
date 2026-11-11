const form = document.getElementById("search-form");
const queryInput = document.getElementById("query");
const resultsElement = document.getElementById("results");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const query = queryInput.value.trim();

    if (!query) {
        return;
    }

    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);
    const data = await response.json();

    resultsElement.innerHTML = "";

    for (const joke of data.result) {
        const article = document.createElement("article");
        const paragraph = document.createElement("p");

        paragraph.textContent = joke.value;

        article.appendChild(paragraph);
        resultsElement.appendChild(article);
    }
});
