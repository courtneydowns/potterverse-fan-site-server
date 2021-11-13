const { DataTypes } = require("sequelize");
const db = require("../db");

const Potions = db.define("potions", {
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  effect: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  characteristics: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  difficulty_level: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  appearances: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Potions;
