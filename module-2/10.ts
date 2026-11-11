/*
Write a voting program as described below for small-scale meeting use. (8p)
The program asks for the number of candidates.
Then the program asks for the names of the candidates: Name for candidate 1
Store the candidates names and initial vote count in objects like this:
[
    {
        name: 'ellie',
        votes: 0,
    },
    {
        name: 'frank',
        votes: 0,
    },
    {
        name: 'pamela',
        votes: 0,
    },
]

The program asks for the number of voters.
The program asks each voter in turn who they will vote for. Voter should enter candidate name. If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
The program announces the name of the winner and the results by printing it to the console:

The winner is pamela with 3 votes.
results:
pamela: 3 votes
frank: 1 votes
ellie: 1 votes

Some help:

// You need to compare votes so console log a and b to see how to get the correct property.
someArray.sort((a, b) => {
   console.log(a, b);
   return b - a;
});
*/

const candidatesCount = parseInt(prompt("How many candidates?")!);

type Candidate = {
    name: string,
    votes: number,
};

const candidates: Candidate[] = [];
for (let i = 0; i < candidatesCount; i++) {
    const candidateName = prompt(`Name for candidate ${i + 1}`)!;
   
    candidates.push({
        name: candidateName,
        votes: 0,
    });
}

const voterCount = parseInt(prompt("How many voters?")!);

for (let i = 0; i < voterCount; i++) {
    const vote = prompt("Who will you vote for?") ?? "";
    const normalizedVote = vote.trim().toLowerCase();

    // An empty vote is allowed and simply not counted for anyone.
    if (normalizedVote === "") {
        continue;
    }

    const targetCandidate = candidates.find(c => c.name.toLowerCase() === normalizedVote);

    if (!targetCandidate) {
        console.log(`A candidate with the name ${vote} was not found. This vote will not be counted.`);
        continue;
    }

    targetCandidate.votes++;
}

candidates.sort((a, b) => {
   return b.votes - a.votes;
});

const winner = candidates[0];

console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log("results:");
for (const candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}