const numberOfParticipants = parseInt(
    prompt("Enter the number of participants"),
    10
);

const participants = [];

for (let i = 0; i < numberOfParticipants; i++) {
    participants.push(
        prompt(`${i + 1}: Enter the name of this participant.`) ?? "No name"
    );
}

participants.sort((a, b) => a.localeCompare(b));

const list = document.createElement("ol");

for (const participant of participants) {
    const item = document.createElement("li");
    item.textContent = participant;
    list.appendChild(item);
}

document.body.appendChild(list);
