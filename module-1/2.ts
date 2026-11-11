
/*
    Write a program that prompts for user's name and then greets the user. 
    Print the result to the HTML document: Hello, Name! (2p)
*/

const response = prompt("Enter your name: ");

document.body.innerText = response ? `Hello, ${response}!` : "You did not enter a name!";