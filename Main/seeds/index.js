//setting consts
const sequelize = require('../config/connection');
const seedDeck = require('./deckData');
const seedFlashcards = require('./flashcardData');

//setting data to put into individual cards and deck, async so it doesn't hold up site
const seedAll = async () => {
    await sequelize.sync({ force : true });

    await seedDeck();

    await seedFlashcards();

    process.exit(0);
};

//sending all data out to its minions
seedAll();