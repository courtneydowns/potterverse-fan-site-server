const { DataTypes } = require("sequelize");
const db = require("../db");

const Characters = db.define("characters", {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  born: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  blood_status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eye_color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  hair_color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  house: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  wand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  patronus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  boggart: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Characters;
