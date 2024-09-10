//Array of correct/incorrect answers for Card 4

let correctAnswer = ["Texas Longhorn"];
let wrongAnswers = [
    "Shorthorn Durham Cattle",
    "Brahman Cattle",
    "Angus",
    "Watausi",
    "Scottish Highland",
    "Piedmontese",
    "Holstein",
    "Dexter",
    "Gelbuieh"
];

console.log(correctAnswer);

//setting random answers
let randomAnswers = getRandomAnswers(wrongAnswers, 3);

function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0, i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getRandomAnswers(arr, numChoices = 4) {
    let shuffledArray = fisherYatesShuffle(arr);
    return shuffledArray.slice(0, numChoices);
}

console.log("Guess which cow this is!");
randomAnswers.forEach((choice, index) => {
    console.log(`${index + 1}, ${choice}`);
});