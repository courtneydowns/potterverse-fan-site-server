const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Magical_objects = require("./magical_objects");
const Potion_ingredients = require("./potion_ingredients");
const Potions = require("./potions");
const Characters = require("./characters");
const Spells = require("./spells");
const Wand_core = require("./wand_core");
const Wand_wood = require("./wand_wood");
const User = require("./user");
const Profile = require("./profile");
const Comment = require("./comment");

User.hasMany(Comment);
Comment.belongsTo(User);
User.hasOne(Profile);
Profile.belongsTo(User);
Magical_objects.hasMany(Comment);
Comment.belongsTo(Magical_objects);
Characters.hasMany(Comment);
Comment.belongsTo(Characters);
Potion_ingredients.hasMany(Comment);
Comment.belongsTo(Potion_ingredients);
Potions.hasMany(Comment);
Comment.belongsTo(Potions);
Spells.hasMany(Comment);
Comment.belongsTo(Spells);
Wand_core.hasMany(Comment);
Comment.belongsTo(Wand_core);
Wand_wood.hasMany(Comment);
Comment.belongsTo(Wand_wood);

module.exports = {
  User,
  Comment,
  Profile,
  Spells,
  Magical_objects,
  Potions,
  Potion_ingredients,
  Characters,
  Wand_core,
  Wand_wood,
};
