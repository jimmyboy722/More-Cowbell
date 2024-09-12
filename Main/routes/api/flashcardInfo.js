const express = require('express');
const app = express();
const router = require('express').Router();
const FlashcardData = require('../../models/Flashcard');

app.use(express.json());


app.get('/api/flashcardData', async (req, res) => {
    try {
        const cardData = await cardData.findAll();
        res.status(200).json(cardData);
    } catch (err) {
    res.status(500).json(err);
    }
});

app.post('/api/cardData', async (req, res) => {
    try {
        const cardData = await FlashcardData.create({
            card: cardData.length +1,
            name: req.body.name,
            origin: req.body.origin,
            coatType: req.body.coatType,
            color: req.body.color,
            avgWeight: req.body.avgWeight,
            purpose: req.body.purpose,
        });
        res.status(200).json(cardData);
        } catch (err) {
            res.status (400).json(err);
        }
    });

app.get('/api/cardData/:card', async (req, res) => {
    try {
        const cardData = await FlashcardData.findByPk(req.params.card);
        if (!cardData) {
            res.status(404).json({ message : 'You are tearing me apart Lisa!'});
            return;
        }
        res.status(200).json(cardData);
        } catch (err) {
            res.status(500).json(err);
        }
});

app.put('/api/cardData:card', async (req, res) => {
   try {
    const cardData = await FlashcardData.update(req.body, {
        where: {
            card: req.params.card,
        },
    });
    if (!cardData[0]) {
        res.status(404).json({ message : 'The Lannisters send their regards' });
        return;
    }
    res.status(200).json(cardData);
   } catch (err) {
    res.status(500).json(err);
   }
});

module.exports = router;