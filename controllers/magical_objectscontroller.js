let express = require("express");
let router = express.Router();
const { Magical_objects, Comment } = require("../models");
let magical_objectsImport = require("../json/magical_objects.json");

router.post("/", function (req, res) {
  Magical_objects.bulkCreate(magical_objectsImport)
    .then(
      function createSuccess(loggingData) {
        res.send({
          message: "Completed magical_objects import",
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
  Magical_objects.findAll({ include: Comment })
    .then((magical_objects) => res.status(200).json(magical_objects))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:name", function (req, res) {
  Magical_objects.findOne({
    where: { name: req.params.name },
    include: Comment,
  })
    .then((magical_objects) => res.status(200).json(magical_objects))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
