const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Like = sequelize.define("like", {
  liked_userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Like;
