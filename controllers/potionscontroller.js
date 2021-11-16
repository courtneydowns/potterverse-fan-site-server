let express = require("express");
let router = express.Router();
const { Potions, Comment } = require("../models");
let potionsImport = require("../json/potions");

router.post("/", function (req, res) {
  Potions.bulkCreate(potionsImport)
    .then(
      function createSuccess(loggingData) {
        res.send({
          message: "Completed potions import",
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
  Potions.findAll({ include: Comment })
    .then((potions) => res.status(200).json(potions))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:name", function (req, res) {
  Potions.findOne({ where: { name: req.params.name }, include: Comment })
    .then((potions) => res.status(200).json(potions))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
