const { Deck } = require('../models');

//User high scores listed - needs editing/refinement
const deckData = [
    {
        user: './User.init.username',
        high_score: '',
    },
    {
        user: './User.init.username',
        high_score: '',
    },
    {
        user: './User.init.username',
        high_score: '',
    },
    {
        user: './User.init.username',
        high_score: '',
    },
    {
        user: './User.init.username',
        high_score: '',
    },
    {
        user: './User.init.username',
        high_score: '',
    },
];

//setting data
const seedDeck = () => Deck.bulkCreate(deckData);

module.exports = seedDeck