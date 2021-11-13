let express = require("express");
let router = express.Router();
const { Wand_wood, Comment } = require("../models");
let wand_woodImport = require("../json/wand_wood.json");

router.post("/", function (req, res) {
  Wand_wood.bulkCreate(wand_woodImport)
    .then(
      function createSuccess(loggingData) {
        res.send({
          message: "Completed wand_wood import",
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
  Wand_wood.findAll({ include: Comment })
    .then((wand_wood) => res.status(200).json(wand_wood))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:wand_wood", function (req, res) {
  Wand_wood.findOne({
    where: { wand_wood: req.params.wand_wood },
    include: Comment,
  })
    .then((wand_wood) => res.status(200).json(wand_wood))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
