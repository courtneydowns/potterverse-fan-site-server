const { DataTypes } = require("sequelize");
const db = require("../db");

const Wand_core = db.define("wand_core", {
  core_material: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  used_by: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  known_characteristics: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Wand_core;
