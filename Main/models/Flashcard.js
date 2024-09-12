//setting consts
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//setting Flashcard info types
class Flashcard extends Model {}

Flashcard.init(
//setting flashcards info
 {
card: {
  type: DataTypes.STRING,
  allowNull: false,
   primaryKey: true,
  autoIncrement: true,
  },
 cow: {
    type: DataTypes.STRING,
    allowNull: false,
     primaryKey: true,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coat_type: {
    type: DataTypes.STRING,
   allowNull: false,
 },
 average_weight: {
   type: DataTypes.STRING,
   allowNull: false,
  },
  purpose: {
   type: DataTypes.STRING,
   allowNull: false,
  },
 },

//sequelize stuff
 {
   sequelize,
   freezeTableName: true,
   underscored: true,
   modelName: "Flashcard",
 }
);

module.exports = Flashcard;
