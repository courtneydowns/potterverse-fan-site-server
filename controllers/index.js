const user = require("./usercontroller");
const profile = require("./profilecontroller");
const comment = require("./commentcontroller");
const magical_objects = require("./magical_objectscontroller");
const characters = require("./characterscontroller");
const potion_ingredients = require("./potion_ingredientscontroller");
const potions = require("./potionscontroller");
const spells = require("./spellscontroller");
const wand_core = require("./wand_corecontroller");
const wand_wood = require("./wand_woodcontroller");

module.exports = {
  user,
  profile,
  comment,
  magical_objects,
  characters,
  potion_ingredients,
  potions,
  spells,
  wand_core,
  wand_wood,
};
