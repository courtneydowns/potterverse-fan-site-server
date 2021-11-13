const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Profile = sequelize.define("profile", {
  bio: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  house: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favoriteHarryPotterBook: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favoriteHarryPotterMovie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favoriteHarryPotterCharacter: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Profile;
