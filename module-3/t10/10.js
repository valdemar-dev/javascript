/*
Open t10 folder in your IDE/editor. Read the first name and last name values from the form and print them in the <p id="target"> (2p)
remember to stop the default action of the form
you can use attribute selectors in querySelector() to select the <input> elements
example output: Your name is Luke Skywalker
*/

const form = document.getElementById("source");
const target = document.getElementById("target");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = form.querySelector('input[name="firstname"]').value;
    const lastName = form.querySelector('input[name="lastname"]').value;

    target.textContent = `Your name is ${firstName} ${lastName}`;
});
