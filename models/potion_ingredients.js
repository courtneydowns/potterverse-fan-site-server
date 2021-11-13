const { DataTypes } = require("sequelize");
const db = require("../db");

const Potion_ingredients = db.define("potion_ingredients", {
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  alternative_name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  taken_from: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  endemic_to: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  natural_environment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sentience: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stem: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  leaves: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  flowers: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  properties: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  distinction: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  physical_characteristics: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  used_in: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  usage: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  appearances: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Potion_ingredients;
