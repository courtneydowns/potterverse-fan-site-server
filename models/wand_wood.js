const { DataTypes } = require("sequelize");
const db = require("../db");

const Wand_Wood = db.define("wand_wood", {
  wand_wood: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Wand_Wood;
