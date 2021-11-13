let express = require("express");
let router = express.Router();
const { Characters, Comment } = require("../models");
let CharactersImport = require("../json/characters.json");

router.post("/", function (req, res) {
  Characters.bulkCreate(CharactersImport)
    .then(
      function createSuccess(loggingData) {
        res.send({
          message: "Completed characters import",
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
  Characters.findAll({ include: Comment })
    .then((character) => res.status(200).json(character))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:name", function (req, res) {
  Characters.findOne({ where: { name: req.params.name }, include: Comment })
    .then((character) => res.status(200).json(character))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
