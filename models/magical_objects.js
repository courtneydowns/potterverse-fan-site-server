const { DataTypes } = require("sequelize");
const db = require("../db");

const Magical_objects = db.define("magical_objects", {
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  owners: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  use: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  appearances: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Magical_objects;
