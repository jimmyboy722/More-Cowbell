/*

//Array of correct/incorrect answers for Card 1

let correctAnswer = (["Shorthorn Durham Cattle"], true);
let wrongAnswers = ([
    "Angus",
    "Brahman Cattle",
    "Texas Longhorn",
    "Watausi",
    "Scottish Highland",
    "Piedmontese",
    "Holstein",
    "Dexter",
    "Gelbuieh"
], false);

console.log(correctAnswer);

//setting random answers
let randomAnswers = getRandomAnswers(wrongAnswers, 3);

const anyAnswer = (correctAnswer, wrongAnswers);

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


//Presenting answers
console.log("Guess which cow this is!");
randomAnswers.forEach((choice, index) => {
    console.log(`${index + 1}, ${choice}`);
});


//Answer selection stuff

//assigning button consts
const option_a = document.getElementByName('option_a');
const option_b = document.getElementByName('option_b');
const option_c = document.getElementByName('option_c');
const option_d = document.getElementByName('option_d');

//ability to link to correct/wrong indicator

const fs = require('fs');
const path = require('path');

const willFerrell = path.join(__dirname, '../correctAnswer.js');
const comeSoFar = path.join(__dirname, '../comeSoFar.js');

const logFerrell = fs.createWriteStream(willFerrell, { flags: 'a' });
const logSoFar = fs.createWriteStream(comeSoFar, { flags: 'a'});

//event listeners for buttons

option_a.addEventListener('click', function() {
    let option_a = anyAnswer;
    if (anyAnswer) = true {
        import { moreCowbell } from '/Main/assets/js/correctAnswer.js'; 
    } else {
        import { comeSoFar } from '/Main/assets/js/comeSoFar.js';
    }
})