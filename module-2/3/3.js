const dogs = [];

for (let i = 0; i < 6; i++) {
    dogs.push(prompt(`${i + 1}: Enter the name of a dog`) ?? "No name given.");
}

dogs.sort((a, b) => b.localeCompare(a));

const list = document.createElement("ul");
document.body.appendChild(list);

for (const dog of dogs) {
    const item = document.createElement("li");
    item.textContent = dog;
    list.appendChild(item);
}
