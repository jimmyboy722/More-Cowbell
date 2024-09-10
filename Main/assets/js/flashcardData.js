// LEFT IT EMPTY TO FILL IN THE ROUTE
const { Flashcard } = require('');

const FlashcardData = [
  {
    Name: 'Durham Cattle',
    Origin: 'Northeast England',
    CoatType: 'Short',
    Color: 'Red and White',
    AvgWeight: 1300 'lbs',
    Purpose:'Multipurpose',
      
  },
  {
    Name: 'Angus',
    Origin: 'Scotland',
    CoatType: 'Short',
    Color:'Black',
    AvgWeight: 1200 'lbs',
    Purpose: 'Meat', 
  },
  {
    Name: 'Brahman Cattle',
    Origin: 'India',
    CoatType: 'Short',
    Color:'Light to dark Gray',
    AvgWeight: 2000 'lbs',
    Purpose:'Meat',
  },
  {
    Name: 'Texas Longhorn',
    Origin: 'USA',
    CoatType: 'Short',
    Color:'Black & Red',
    AvgWeight: 1100 'lbs',
    Purpose: 'High Fertility',
  },
  {
    Name: 'Watusi',
    Origin: 'East Africa',
    CoatType: 'Short',
    Color:'Brown,Red,black',
    AvgWeight: 1100 'lbs',
    Purpose: 'Multipurpose', 
  },
  {
    Name: 'Scottish Highland',
    Origin: 'Scottland',
    CoatType: 'Thick Double Coat',
    Color:'Red, Ginger, Black',
    AvgWeight: 1150 'lbs',
    Purpose:'Multipurpose',
  },
  {
    Name: 'Piedmontese',
    Origin: 'Italy',
    CoatType: 'Short',
    Color: 'White',
    AvgWeight:1300 'lbs',
    Purpose: 'Meat',
  },
  {
    Name: 'Holstien',
    Origin: 'Holland',
    CoatType: 'Short',
    Color:'Black and White',
    AvgWeight:1500 'lbs',
    Purpose: 'Milk',
  },
  {
    Name: 'Dexter', 
    Origin: 'Southern Ireland',
    CoatType: 'Short Coat', 
    Color: 'Black',
    AvgWeight: 800 'lbs' ,
    Purpose: 'Meat , milk',
  },
  {
    Name: 'Gelbuieh', 
    Origin: 'Baravia , Germany',
    CoatType: 'Short Coat',
    Color:'Red',
    AvgWeight: 1382 'lbs',
    Purpose:'Meat,Milk',
  },

];

//Multiple Choice Connector
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
    if (true) {
        import { moreCowbell } from '/Main/assets/js/correctAnswer.js'; 
    } else {
        import { comeSoFar } from '/Main/assets/js/comeSoFar.js';
    }
})

option_b.addEventListener('click', function() {
  if (true) {
      import { moreCowbell } from '/Main/assets/js/correctAnswer.js'; 
  } else {
      import { comeSoFar } from '/Main/assets/js/comeSoFar.js';
  }
})

option_c.addEventListener('click', function() {
  if (true) {
      import { moreCowbell } from '/Main/assets/js/correctAnswer.js'; 
  } else {
      import { comeSoFar } from '/Main/assets/js/comeSoFar.js';
  } return
})

option_d.addEventListener('click', function() {
  if (true) {
      import { moreCowbell } from '/Main/assets/js/correctAnswer.js'; 
  } else {
      import { comeSoFar } from '/Main/assets/js/comeSoFar.js';
  }
})


//Randomly selects new card upon being clicked
document.getElementById('randomFlashcardButton').addEventListener('click', function() {
  let input = document.getElementById('flashcardInput');
  if (input.isDefaultNamespace.length === 0) {
      alert("Look at how far you've come!");
      return;
  }

  let flashcards = input.flashcards;

  let randomIndex = Math.floor(Math.random() * flashcards.length);

  let randomFlashcard = flashcards[randomIndex];

  document.getElementById('selectedFlashcard').textContent = "Select next flashcard: " + randomFlashcard.came
});


//Flashcards
class flashcardDeck {
  //Card 1
  innerClass = 
  
  class card_1 {

    let correctAnswer1 = FlashcardData[0]
    let wrongAnswers1 = FlashcardData[1-9]
    let randomAnswers1 = (getRandomAnswers1(wrongAnswers1, 3), correctAnswer1)

    console.log(correctAnswer1)
    console.log(wrongAnswers1)

    function fisherYatesShuffle1(arr) {
      for (let i = arr.length - 1; i > 0, i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function getRandomAnswers1(arr, numChoices = 4) {
      let shuffledArray = fisherYatesShuffle1(arr);
      return shuffledArray.slice(0, numChoices);
    }

    console.log("Guess which cow this is!");
    randomAnswers1.forEach((choice, index) => {
        console.log(`${index + 1}, ${choice}`);
    });
  }

  console.log(card_1);


  //Card 2
  class card_2 {

    let correctAnswer2 = FlashcardData[1]
    let wrongAnswers2 = FlashcardData[0, 2-9]
    let randomAnswers2 = (getRandomAnswers2(wrongAnswers2, 3), correctAnswer2)

    console.log(correctAnswer2)
    console.log(wrongAnswers2)

    function fisherYatesShuffle1(arr) {
      for (let i = arr.length - 1; i > 0, i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function getRandomAnswers2(arr, numChoices = 4) {
      let shuffledArray = fisherYatesShuffle2(arr);
      return shuffledArray.slice(0, numChoices);
    }

    console.log("Guess which cow this is!");
    randomAnswers2.forEach((choice, index) => {
        console.log(`${index + 1}, ${choice}`);
    });
  }

  console.log(card_2);


  //Card 3
  class card_3 {

    let correctAnswer3 = FlashcardData[2]
    let wrongAnswers3 = FlashcardData[0-1, 3-9]
    let randomAnswers3 = (getRandomAnswers3(wrongAnswers3, 3), correctAnswer3)

    console.log(correctAnswer3)
    console.log(wrongAnswers3)

    function fisherYatesShuffle3(arr) {
      for (let i = arr.length - 1; i > 0, i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function getRandomAnswers3(arr, numChoices = 4) {
      let shuffledArray = fisherYatesShuffle3(arr);
      return shuffledArray.slice(0, numChoices);
    }

    console.log("Guess which cow this is!");
    randomAnswers3.forEach((choice, index) => {
        console.log(`${index + 1}, ${choice}`);
    });
  }

  console.log(card_3);


  //Card 4
  class card_4 {

    let correctAnswer4 = FlashcardData[3]
    let wrongAnswer4 = FlashcardData[0-2, 4-9]
    let randomAnswer4 = (getRandomAnswer4(wrongAnswer4, 3), correctAnswer4)

    console.log(correctAnswer4)
    console.log(wrongAnswer4)

    function fisherYatesShuffle4(arr) {
      for (let i = arr.length - 1; i > 0, i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function getRandomAnswer4(arr, numChoices = 4) {
      let shuffledArray = fisherYatesShuffle4(arr);
      return shuffledArray.slice(0, numChoices);
    }

    console.log("Guess which cow this is!");
    randomAnswer4.forEach((choice, index) => {
        console.log(`${index + 1}, ${choice}`);
    });
  }

  console.log(card_4);


  //Card 5
  class card_5 {

    let correctAnswer5 = FlashcardData[4]
    let wrongAnswer5 = FlashcardData[0-3, 5-9]
    let randomAnswer5 = (getRandomAnswer5(wrongAnswer5, 3), correctAnswer5)

    console.log(correctAnswer5)
    console.log(wrongAnswer5)

    function fisherYatesShuffle5(arr) {
      for (let i = arr.length - 1; i > 0, i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function getRandomAnswer5(arr, numChoices = 4) {
      let shuffledArray = fisherYatesShuffle5(arr);
      return shuffledArray.slice(0, numChoices);
    }

    console.log("Guess which cow this is!");
    randomAnswer5.forEach((choice, index) => {
        console.log(`${index + 1}, ${choice}`);
    });
  }

  console.log(card_5);


  //Card 6
  class card_6 {

    let correctAnswer6 = FlashcardData[5]
    let wrongAnswer6 = FlashcardData[0-4, 6-9]
    let randomAnswer6 = (getRandomAnswer6(wrongAnswer6, 3), correctAnswer6)

    console.log(correctAnswer6)
    console.log(wrongAnswer6)

    function fisherYatesShuffle6(arr) {
      for (let i = arr.length - 1; i > 0, i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function getRandomAnswer6(arr, numChoices = 4) {
      let shuffledArray = fisherYatesShuffle6(arr);
      return shuffledArray.slice(0, numChoices);
    }

    console.log("Guess which cow this is!");
    randomAnswer6.forEach((choice, index) => {
        console.log(`${index + 1}, ${choice}`);
    });
  }

  console.log(card_6);


  //Card 7
  class card_7 {

    let correctAnswer7 = FlashcardData[6]
    let wrongAnswer7 = FlashcardData[0-5, 7-9]
    let randomAnswer7 = (getRandomAnswer7(wrongAnswer7, 3), correctAnswer7)

    console.log(correctAnswer7)
    console.log(wrongAnswer7)

    function fisherYatesShuffle7(arr) {
      for (let i = arr.length - 1; i > 0, i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function getRandomAnswer7(arr, numChoices = 4) {
      let shuffledArray = fisherYatesShuffle7(arr);
      return shuffledArray.slice(0, numChoices);
    }

    console.log("Guess which cow this is!");
    randomAnswer7.forEach((choice, index) => {
        console.log(`${index + 1}, ${choice}`);
    });
  }

  console.log(card_7);


  //Card 8
  class card_8 {

    let correctAnswer8 = FlashcardData[7]
    let wrongAnswer8 = FlashcardData[0-6, 8-9]
    let randomAnswer8 = (getRandomAnswer8(wrongAnswer8, 3), correctAnswer8)

    console.log(correctAnswer8)
    console.log(wrongAnswer8)

    function fisherYatesShuffle8(arr) {
      for (let i = arr.length - 1; i > 0, i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function getRandomAnswer8(arr, numChoices = 4) {
      let shuffledArray = fisherYatesShuffle8(arr);
      return shuffledArray.slice(0, numChoices);
    }

    console.log("Guess which cow this is!");
    randomAnswer8.forEach((choice, index) => {
        console.log(`${index + 1}, ${choice}`);
    });
  }

  console.log(card_8);


  //Card 9
  class card_9 {

    let correctAnswer9 = FlashcardData[8]
    let wrongAnswer9 = FlashcardData[0-7, 9]
    let randomAnswer9 = (getRandomAnswer9(wrongAnswer9, 3), correctAnswer9)

    console.log(correctAnswer9)
    console.log(wrongAnswer9)

    function fisherYatesShuffle9(arr) {
      for (let i = arr.length - 1; i > 0, i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function getRandomAnswer9(arr, numChoices = 4) {
      let shuffledArray = fisherYatesShuffle9(arr);
      return shuffledArray.slice(0, numChoices);
    }

    console.log("Guess which cow this is!");
    randomAnswer9.forEach((choice, index) => {
        console.log(`${index + 1}, ${choice}`);
    });
  }

  console.log(card_9)


  //Card 10
  class card_10 {

    let correctAnswer10 = FlashcardData[9]
    let wrongAnswer10 = FlashcardData[0-9]
    let randomAnswer10 = (getRandomAnswer10(wrongAnswer10, 3), correctAnswer10)

    console.log(correctAnswer10)
    console.log(wrongAnswer10)

    function fisherYatesShuffle10(arr) {
      for (let i = arr.length - 1; i > 0, i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function getRandomAnswer10(arr, numChoices = 4) {
      let shuffledArray = fisherYatesShuffle10(arr);
      return shuffledArray.slice(0, numChoices);
    }

    console.log("Guess which cow this is!");
    randomAnswer10.forEach((choice, index) => {
        console.log(`${index + 1}, ${choice}`);
    });
  }

  console.log(card_10)
}

console.log(flashcardDeck)


const seedFlashcards = () => Flashcard.bulkCreate(FlashcardData);
// WASN'T SURE WHAT TO PUT HERE 

module.exports = seedFlashcards;