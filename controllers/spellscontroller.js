const express = require("express");
const router = express.Router();
const { Spells, Comment } = require("../models");
let spellsImport = require("../json/spells.json");

router.post("/", function (req, res) {
  Spells.bulkCreate(spellsImport)
    .then(
      function createSuccess(loggingData) {
        res.send({
          message: "Completed spells import",
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
  Spells.findAll({ include: Comment })
    .then((spells) => res.status(200).json(spells))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:name", function (req, res) {
  Spells.findOne({ where: { name: req.params.name }, include: Comment })
    .then((spells) => res.status(200).json(spells))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
