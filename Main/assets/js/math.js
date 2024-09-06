//needs refinement to log correct and wrong selections
let flashcards = {
    card_1: { correct : [], wrong: [] },
    card_2: { correct : [], wrong: [] },
    card_3: { correct : [], wrong: [] },
    card_4: { correct : [], wrong: [] },
    card_5: { correct : [], wrong: [] },
    card_6: { correct : [], wrong: [] },
    card_7: { correct : [], wrong: [] },
    card_8: { correct : [], wrong: [] },
    card_9: { correct : [], wrong: [] },
    card_10: { correct : [], wrong: [] },
};

//setting to Math.JS
const math = require('mathjs');

//Calculate card weight- the more incorrect answers a card gets, the more it pops up
function calculateWeight(correct, wrong) {
    return wrong / (correct + wrong);
}

let cards = Object.keys(flashcards);
let weights = cards.map(card => calculateWeight(flashcards[card].correct, flashcards[card].wrong));

let totalWeight = math.sum(weights);
let probabilities = weights.map(weight => weight / totalWeight);


//making sure that the probability of what the next card will be isn't random, but is based off of accuracy of answers
function chooseNextCard() {
    let random = math.random();
    let cumulativeProbability = 0;
    for (let i = 0; i < cards.length; i++) {
        cumulativeProbability += probabilities[i];
        if (random < cumulativeProbability) {
            return cards[i];
        }
    }
}