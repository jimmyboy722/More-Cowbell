//settings consts
const User = require('./User');
const Deck = require('./Deck');
const Flashcard = require('./Flashcard');

//setting Flashcards to Deck
Deck.hasMany(Flashcard, {
    foreignKey: 'deck_id',
});

Flashcard.belongsTo(Deck, {
    foreignKey: 'deck_id',
});



module.exports = { User , Deck , Flashcard };