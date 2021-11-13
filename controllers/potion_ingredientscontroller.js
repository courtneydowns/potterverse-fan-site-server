let express = require("express");
let router = express.Router();
const sequelize = require("../db");
const { Potion_ingredients, Comment } = require("../models");
let potion_ingredientsImport = require("../json/potion_ingredients.json");

router.post("/", function (req, res) {
  Potion_ingredients.bulkCreate(potion_ingredientsImport)
    .then(
      function createSuccess(loggingData) {
        res.send({
          message: "Completed potion_ingredients import",
        });
      },
      function createError(err) {
        res.send(500, { message: err.message });
      }
    )
    .catch(function createError(err) {
      res.send(500, { message: err.message });
    });
});

router.get("/", function (req, res) {
  Potion_ingredients.findAll({ include: Comment })
    .then((potion_ingredients) => res.status(200).json(potion_ingredients))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:name", function (req, res) {
  Potion_ingredients.findOne({
    where: { name: req.params.name },
    include: Comment,
  })
    .then((potion_ingredients) => res.status(200).json(potion_ingredients))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
