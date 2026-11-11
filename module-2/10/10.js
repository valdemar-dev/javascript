const numberOfCandidates = parseInt(prompt("How many candidates?"), 10);

const candidates = [];

for (let i = 0; i < numberOfCandidates; i++) {
    const name = prompt(`Name for candidate ${i + 1}`) ?? "";

    candidates.push({
        name,
        votes: 0,
    });
}

const numberOfVoters = parseInt(prompt("How many voters?"), 10);

for (let i = 0; i < numberOfVoters; i++) {
    const vote = prompt("Who will you vote for?") ?? "";
    const normalizedVote = vote.trim().toLowerCase();

    // An empty vote is allowed and simply not counted for anyone.
    if (normalizedVote === "") {
        continue;
    }

    const candidate = candidates.find(
        (candidate) => candidate.name.toLowerCase() === normalizedVote
    );

    if (!candidate) {
        console.log(
            `A candidate with the name ${vote} was not found. ` +
            "This vote will not be counted."
        );
        continue;
    }

    candidate.votes++;
}

candidates.sort((a, b) => b.votes - a.votes);

const winner = candidates[0];

if (!winner) {
    console.log("No candidates were entered.");
} else {
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log("results:");

    for (const candidate of candidates) {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    }
}
