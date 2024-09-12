//setting consts
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("./config/connection");
const { validate } = require("./config/connection");

//check password
//class User extends Model {
// checkPassword(loginPw) {
//   return bcrypt.compareSync(loginPw, this.password);
// }
//}
User.init(
  //user info
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    consecutive_correct_answers: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // INITIALIZING WITH 0
    },
  },
  //verifying info
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
