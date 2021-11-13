const { DataTypes } = require("sequelize");
const db = require("../db");

const Spells = db.define("spells", {
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  pronunciation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  use: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  etymology: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  appearances: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Spells;
