/*
Write a program that asks for the names of six dogs. 
The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)
*/

const dogs: string[] = [];

for (let i = 0; i < 6; i++) {
    dogs.push(prompt(`${i + 1}: Enter the name of a dog`) ?? "No name given.");
}

const ul = document.createElement("ul");
document.body.appendChild(ul);

dogs.sort((a, b) => b.localeCompare(a));

for (const dog of dogs) {
    const li = document.createElement("li");
    li.innerText = dog;

    ul.appendChild(li);
}
