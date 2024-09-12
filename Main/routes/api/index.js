
//setting APIs and routers
const router = require('express').Router();
const flashcardInfo = require('./flashcardInfo');

//setting destination
router.use('/flashcardData', flashcardInfo);

console.log(typeof flashcardInfo);

module.exports = router;
