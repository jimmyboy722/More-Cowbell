
//Flashcard data
const FlashcardData = [
  {
    Card: card_1,
    Name: 'Durham Cattle',
    Origin: 'Northeast England',
    CoatType: 'Short',
    Color: 'Red and White',
    AvgWeight: '1300 lbs',
    Purpose: 'Multipurpose',
      
  },
  {
    Card: card_2,
    Name: 'Angus',
    Origin: 'Scotland',
    CoatType: 'Short',
    Color: 'Black',
    AvgWeight: '1200 lbs',
    Purpose: 'Meat',
  },
  {
    Card: card_3,
    Name: 'Brahman Cattle',
    Origin: 'India',
    CoatType: 'Short',
    Color: 'Light to dark Gray',
    AvgWeight: '2000 lbs',
    Purpose: 'Meat',
  },
  {
    Card: card_4,
    Name: 'Texas Longhorn',
    Origin: 'USA',
    CoatType: 'Short',
    Color: 'Black & Red',
    AvgWeight: '1100 lbs',
    Purpose: 'High Fertility',
  },
  {
    Card: card_5,
    Name: 'Watusi',
    Origin: 'East Africa',
    CoatType: 'Short',
    Color: 'Brown,Red,black',
    AvgWeight: '1100 lbs',
    Purpose: 'Multipurpose',
  },
  {
    Card: card_6,
    Name: 'Scottish Highland',
    Origin: 'Scottland',
    CoatType: 'Thick Double Coat',
    Color: 'Red, Ginger, Black',
    AvgWeight: '1150 lbs',
    Purpose: 'Multipurpose',
  },
  {
    Card: card_7,
    Name: 'Piedmontese',
    Origin: 'Italy',
    CoatType: 'Short',
    Color: 'White',
    AvgWeight: '1300 lbs',
    Purpose: 'Meat',
  },
  {
    Card: card_8,
    Name: 'Holstien',
    Origin: 'Holland',
    CoatType: 'Short',
    Color: 'Black and White',
    AvgWeight: '1500 lbs',
    Purpose: 'Milk',
  },
  {
    Card: card_9,
    Name: 'Dexter', 
    Origin: 'Southern Ireland',
    CoatType: 'Short Coat', 
    Color: 'Black',
    AvgWeight: '800 lbs' ,
    Purpose: 'Meat , milk',
  },
  {
    Card: card_10,
    Name: 'Gelbuieh', 
    Origin: 'Baravia , Germany',
    CoatType: 'Short Coat',
    Color: 'Red',
    AvgWeight: '1382 lbs',
    Purpose: 'Meat, milk',
  },
];

console.log(FlashcardData);
console.log(FlashcardData[0]);
console.log(FlashcardData[1]);
console.log(FlashcardData[2]);
console.log(FlashcardData[3]);
console.log(FlashcardData[4]);
console.log(FlashcardData[5]);
console.log(FlashcardData[6]);
console.log(FlashcardData[7]);
console.log(FlashcardData[8]);
console.log(FlashcardData[9]);

const flashcardSource = document.getElementById('card-body').innerHTML;
const flashcardTemplate = Handlebars.compile(source);
const flashcardHTML = template(data);

document.getElementById('FlashcardData').innerHTML = html;


//Multiple Choice Connector
const option_a = document.getElementByName('option_a');
const option_b = document.getElementByName('option_b');
const option_c = document.getElementByName('option_c');
const option_d = document.getElementByName('option_d');



//event listeners for buttons

option_a.addEventListener('click', function() {
  const importModule = condition => {
    if ( condition ) {
      return import('/Main/assets/js/correctAnswer.js');
    } else {
      return import('/Main/assets/js/comeSoFar.js');
    }
  };

  importModule(true)
    .then(module => {
      if (module.moreCowbell) {
        module.moreCowbell();
      } else if (module.comeSoFar) {
        module.comeSoFar();
      }
    })
    .catch(err => {
      console.error("Please try again", err);
    });
});

option_b.addEventListener('click', function() {
  const importModule = condition => {
    if ( condition ) {
      return import('/Main/assets/js/correctAnswer.js');
    } else {
      return import('/Main/assets/js/comeSoFar.js');
    }
  };

  importModule(true)
    .then(module => {
      if (module.moreCowbell) {
        module.moreCowbell();
      } else if (module.comeSoFar) {
        module.comeSoFar();
      }
    })
    .catch(err => {
      console.error("Please try again", err);
    });
});

option_c.addEventListener('click', function() {
  const importModule = condition => {
    if ( condition ) {
      return import('/Main/assets/js/correctAnswer.js');
    } else {
      return import('/Main/assets/js/comeSoFar.js');
    }
  };

  importModule(true)
    .then(module => {
      if (module.moreCowbell) {
        module.moreCowbell();
      } else if (module.comeSoFar) {
        module.comeSoFar();
      }
    })
    .catch(err => {
      console.error("Please try again", err);
    });
});

option_d.addEventListener('click', function() {
  const importModule = condition => {
    if ( condition ) {
      return import('/Main/assets/js/correctAnswer.js');
    } else {
      return import('/Main/assets/js/comeSoFar.js');
    }
  };

  importModule(true)
    .then(module => {
      if (module.moreCowbell) {
        module.moreCowbell();
      } else if (module.comeSoFar) {
        module.comeSoFar();
      }
    })
    .catch(err => {
      console.error("Please try again", err);
    });
});




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
class Flashcard {
  constructor(cardIndex) {
    const cardData = FlashcardData[cardIndex];
    this.card = cardData.card;
    this.correctAnswer = cardData.card;
    this.wrongAnswers = this.getWrongAnswers(cardIndex);
    this.randomAnswers = this.getRandomAnswers(this.wrongAnswers, this.correctAnswer);
      
  }

  getWrongAnswers(cardIndex) {
    const wrongAnswers = FlashcardData
    .filter((_, index) => index !== cardIndex)
    .map(card => card.origin);
  return wrongAnswers;
  }

  fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  getRandomAnswers(wrongAnswers, correctAnswer, numChoices = 4) {
    const allAnswers = [...wrongAnswers, correctAnswer];
    const shuffledArray = this.fisherYatesShuffle(allAnswers);
    return shuffledArray.slice(0, numChoices);
  }
}


//Card 1
const card_1 = new Flashcard(0);

console.log(card_1);
console.log(card_1.randomAnswers);

//Card 2
const card_2 = new Flashcard(1);

console.log(card_2);
console.log(card_2.randomAnswers);

//Card 3
const card_3 = new Flashcard(2);

console.log(card_3);
console.log(card_3.randomAnswers);

//Card 4
const card_4 = new Flashcard(3);

console.log(card_4);
console.log(card_4.randomAnswers);

//Card 5
const card_5 = new Flashcard(4);

console.log(card_5);
console.log(card_5.randomAnswers);

//Card 6
const card_6 = new Flashcard(5);

console.log(card_6);
console.log(card_6.randomAnswers);

//Card 7
const card_7 = new Flashcard(6);

console.log(card_7);
console.log(card_7.randomAnswers);

//Card 8
const card_8 = new Flashcard(7);

console.log(card_8);
console.log(card_8.randomAnswers);

//Card 9
const card_9 = new Flashcard(8);

console.log(card_9);
console.log(card_9.randomAnswers);

//Card 10
const card_10 = new Flashcard(9);

console.log(card_10);
console.log(card_10.randomAnswers);

