let express = require("express");
let router = express.Router();
const { Wand_core, Comment } = require("../models");
let wand_coreImport = require("../json/wand_core.json");

router.post("/", function (req, res) {
  Wand_core.bulkCreate(wand_coreImport)
    .then(
      function createSuccess(loggingData) {
        res.send({
          message: "Completed wand_core import",
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
  Wand_core.findAll({ include: Comment })
    .then((wand_core) => res.status(200).json(wand_core))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:core_material", function (req, res) {
  Wand_core.findOne({
    where: { core_material: req.params.core_material },
    include: Comment,
  })
    .then((wand_core) => res.status(200).json(wand_core))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
