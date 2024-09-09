// LEFT IT EMPTY TO FILL IN THE ROUTE
const { Flashcard } = require('');

const FlashcardData = [
  {
    Name: 'Durham Cattle',
    Origin: 'Northeast England',
    CoatType: 'Short',
    Color: 'Red and White',
    AvgWeight: 1300 'Lbs',
    Purpose:'Multipurpose',
      
  },
  {
    Name: 'Angus',
    Origin: 'Scotland',
    CoatType: 'Short',
    Color:'Black',
    AvgWeight: 1200 'Lbs',
    Purpose: 'Meat', 
  },
  {
    Name: 'Brahman Cattle',
    Origin: 'India',
    CoatType: 'Short',
    Color:'Light to dark Gray',
    AvgWeight: 2000 'Lbs',
    Purpose:'Meat',
  },
  {
    Name: 'Texas Longhorn',
    Origin: 'USA',
    CoatType: 'Short',
    Color:'Black & Red'
    AvgWeight: 1100 'Lbs',
    Purpose: 'High Fertility',
  },
  {
    Name: 'Watusi',
    Origin: 'East Africa',
    CoatType: 'Short',
    Color:'Brown,Red,black',
    AvgWeight: 1100 'Lbs',
    Purpose: 'Multipurpose', 
  },
  {
    Name: 'Scottish Highland',
    Origin: 'Scottland',
    CoatType: 'Thick Double Coat',
    Color:'Red, Ginger, Black',
    AvgWeight: 1150 'Lbs',
    Purpose:'Multipurpose',
  },
  {
    Name: 'Piedmontese',
    Origin: 'Italy',
    CoatType: 'Short',
    Color: 'White',
    AvgWeight:1300 'Lbs',
    Purpose: 'Meat',
  },
  {
    Name: 'Holstien',
    Origin: 'Holland',
    CoatType: 'Short'
    Color:'Black and White',
    AvgWeight:1500 'Lbs',
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
    AvgWeight: 1382 'lbs'
    Purpose:'Meat,Milk',
  },

];

const seedFlashcards = () => Flashcard.bulkCreate(FlashcardData);
// WASN'T SURE WHAT TO PUT HERE 

module.exports = ;