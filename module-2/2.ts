/*
Write a program that asks the user for the number of participants. 
After this, the program asks for the names of all participants. 
Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order. (2p)
*/

const numParticipants = parseInt(prompt("Enter the number of participants")!);

const participants: string[] = [];
for (let i = 0; i < numParticipants; i++) {
    participants.push(prompt(`${i + 1}: Enter the name of this participant.`) ?? "No name");
}

participants.sort();

const ol = document.createElement("ol");
ol.append(...participants.map(p => {
    const li = document.createElement("li");

    li.innerText = p;

    return li;
}))

document.body.appendChild(ol);