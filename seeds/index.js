//setting consts
const sequelize = require('../config/connection');
const Card = require('../models/Flashcard');
const seedFlashcards = require('./flashcardData.json');

//setting data to put into individual cards and deck, async so it doesn't hold up site
const seedDatabse = async () => {
    await sequelize.sync({ force : true });

    await Card.bulkCreate(seedFlashcards, {
        individualHooks: true,
        returning: true
    });

    process.exit(0);
};

//sending all data out to its minions
seedDatabse();