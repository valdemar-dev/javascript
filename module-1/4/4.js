const studentName = prompt("Please enter your name: ");
const houseNumber = Math.floor(Math.random() * 4) + 1;

let house;

switch (houseNumber) {
    case 1:
        house = "Gryffindor";
        break;
    case 2:
        house = "Ravenclaw";
        break;
    case 3:
        house = "Slytherin";
        break;
    case 4:
        house = "Hufflepuff";
        break;
    default:
        house = "Gryffindor";
}

document.body.textContent = `${studentName}, you are ${house}.`;
