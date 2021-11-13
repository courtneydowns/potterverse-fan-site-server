let express = require("express");
let router = express.Router();
const validateSession = require("../middleware/validateSession");
const { Comment } = require("../models");

/* GET ALL COMMENTS */
router.get("/", validateSession, function (req, res) {
  Comment.findAll()
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*GET CHARACTER COMMENTS*/
router.get("characters/:cId", validateSession, function (req, res) {
  Comment.findAll({
    where: {
      characterId: req.params.cId,
    },
  })
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/* CREATE CHARACTER COMMENT */
router.post("/create/characters/:cId", validateSession, function (req, res) {
  const commentEntry = {
    comment: req.body.comment.comment,
    userId: req.user.id,
    characterId: req.params.cId,
  };
  Comment.create(commentEntry)
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*UPDATE CHARACTERS COMMENT*/
router.put("/edit/characters/:id", validateSession, function (req, res) {
  const updateCommentEntry = {
    comment: req.body.comment.comment,
  };
  const query = { where: { id: req.params.id, userId: req.user.id } };
  Comment.update(updateCommentEntry, query)
    .then((comment) =>
      res.status(200).json({ message: "The Post has been updated." })
    )
    .catch((err) => res.status(500).json({ error: err }));
});

/*DELETE CHARACTERS COMMENT*/
router.delete("/delete/characters/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };
  console.log(req.user);
  Comment.findOne(query)
    .then((comment) => {
      if (req.user.id === comment.userId || req.user.isAdmin === "true") {
        Comment.destroy(query).then((comment) =>
          res.status(200).json({ message: "This comment has been deleted." })
        );
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/*GET POTION INGREDIENTS COMMENTS*/
router.get("potion-ingredients/:piId", validateSession, function (req, res) {
  Comment.findAll({
    where: {
      potionIngredientId: req.params.piId,
    },
  })
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*CREATING A COMMENT (Potion Ingredient)*/
router.post(
  "/create/potion-ingredients/:piId",
  validateSession,
  function (req, res) {
    const commentEntry = {
      comment: req.body.comment.comment,
      userId: req.user.id,
      potionIngredientId: req.params.piId,
    };
    Comment.create(commentEntry)
      .then((comment) => res.status(200).json(comment))
      .catch((err) => res.status(500).json({ error: err }));
  }
);

/*UPDATE POTION INGREDIENTS COMMENT*/
router.put(
  "/edit/potion-ingredients/:id",
  validateSession,
  function (req, res) {
    const updateCommentEntry = {
      comment: req.body.comment.comment,
    };
    const query = { where: { id: req.params.id, userId: req.user.id } };
    Comment.update(updateCommentEntry, query)
      .then((comment) =>
        res.status(200).json({ message: "The Post has been updated." })
      )
      .catch((err) => res.status(500).json({ error: err }));
  }
);

/*DELETE POTION INGREDIENTS COMMENT*/
router.delete(
  "/delete/potion-ingredients/:id",
  validateSession,
  function (req, res) {
    const query = { where: { id: req.params.id } };
    Comment.findOne(query)
      .then((comment) => {
        if (req.user.id === comment.userId || req.user.isAdmin === "true") {
          Comment.destroy(query).then((comment) =>
            res.status(200).json({ message: "This comment has been deleted." })
          );
        } else {
          res.status(401).json({ message: "Unauthorized" });
        }
      })
      .catch((err) => res.status(500).json({ error: err }));
  }
);

/*GET MAGICAL OBJECTS COMMENTS*/
router.get("magical-objects/:moId", validateSession, function (req, res) {
  Comment.findAll({
    where: {
      magicalObjectsId: req.params.moId,
    },
  })
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*CREATING A COMMENT (Magical Object)*/
router.post(
  "/create/magical-objects/:moId",
  validateSession,
  function (req, res) {
    const commentEntry = {
      comment: req.body.comment.comment,
      userId: req.user.id,
      magicalObjectId: req.params.moId,
    };
    Comment.create(commentEntry)
      .then((comment) => res.status(200).json(comment))
      .catch((err) => res.status(500).json({ error: err }));
  }
);

/*UPDATE MAGICAL OBJECTS COMMENT*/
router.put("/edit/magical-objects/:id", validateSession, function (req, res) {
  const updateCommentEntry = {
    comment: req.body.comment.comment,
  };
  const query = { where: { id: req.params.id, userId: req.user.id } };
  Comment.update(updateCommentEntry, query)
    .then((comment) =>
      res.status(200).json({ message: "The Post has been updated." })
    )
    .catch((err) => res.status(500).json({ error: err }));
});

/*DELETE MAGICAL OBJECTS COMMENT*/
router.delete(
  "/delete/magical-objects/:id",
  validateSession,
  function (req, res) {
    const query = { where: { id: req.params.id } };
    Comment.findOne(query)
      .then((comment) => {
        if (req.user.id === comment.userId || req.user.isAdmin === "true") {
          Comment.destroy(query).then((comment) =>
            res.status(200).json({ message: "This comment has been deleted." })
          );
        } else {
          res.status(401).json({ message: "Unauthorized" });
        }
      })
      .catch((err) => res.status(500).json({ error: err }));
  }
);

/*GET POTIONS COMMENTS*/
router.get("potions/:pId", validateSession, function (req, res) {
  Comment.findAll({
    where: {
      potionId: req.params.pId,
    },
  })
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*CREATING A COMMENT (Potion)*/
router.post("/create/potions/:pId", validateSession, function (req, res) {
  const commentEntry = {
    comment: req.body.comment.comment,
    userId: req.user.id,
    potionId: req.params.pId,
  };
  Comment.create(commentEntry)
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*UPDATE POTIONS COMMENT*/
router.put("/edit/potions/:id", validateSession, function (req, res) {
  const updateCommentEntry = {
    comment: req.body.comment.comment,
  };
  const query = { where: { id: req.params.id, userId: req.user.id } };
  Comment.update(updateCommentEntry, query)
    .then((comment) =>
      res.status(200).json({ message: "The Post has been updated." })
    )
    .catch((err) => res.status(500).json({ error: err }));
});

/*DELETE POTIONS COMMENT*/
router.delete("/delete/potions/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };
  Comment.findOne(query)
    .then((comment) => {
      if (req.user.id === comment.userId || req.user.isAdmin === "true") {
        Comment.destroy(query).then((comment) =>
          res.status(200).json({ message: "This comment has been deleted." })
        );
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/*GET SPELLS COMMENTS*/
router.get("spells/:sId", validateSession, function (req, res) {
  Comment.findAll({
    where: {
      spellId: req.params.sId,
    },
  })
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*CREATING A COMMENT (Spell)*/
router.post("/create/spells/:sId", validateSession, function (req, res) {
  const commentEntry = {
    comment: req.body.comment.comment,
    userId: req.user.id,
    spellId: req.params.sId,
  };
  Comment.create(commentEntry)
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*UPDATE SPELLS COMMENT*/
router.put("/edit/spells/:id", validateSession, function (req, res) {
  const updateCommentEntry = {
    comment: req.body.comment.comment,
  };
  const query = { where: { id: req.params.id, userId: req.user.id } };
  Comment.update(updateCommentEntry, query)
    .then((comment) =>
      res.status(200).json({ message: "The Post has been updated." })
    )
    .catch((err) => res.status(500).json({ error: err }));
});

/*DELETING SPELL COMMENT*/
router.delete("/admin/delete/:sId", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };
  Comment.findOne(query)
    .then((comment) => {
      if (req.user.id === comment.userId || req.user.isAdmin === "true") {
        Comment.destroy(query).then((comment) =>
          res.status(200).json({ message: "This comment has been deleted." })
        );
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/*GET Wand Core COMMENTS*/
router.get("wand-wood/:wcId", validateSession, function (req, res) {
  Comment.findAll({
    where: {
      wandWoodId: req.params.wcId,
    },
  })
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*CREATING A COMMENT (Wand Core)*/
router.post("/create/wand-core/:wcId", validateSession, function (req, res) {
  const commentEntry = {
    comment: req.body.comment.comment,
    userId: req.user.id,
    wandCoreId: req.params.wcId,
  };
  Comment.create(commentEntry)
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*UPDATE WAND CORE COMMENT*/
router.put("/edit/wand-core/:id", validateSession, function (req, res) {
  const updateCommentEntry = {
    comment: req.body.comment.comment,
  };
  const query = { where: { id: req.params.id, userId: req.user.id } };
  Comment.update(updateCommentEntry, query)
    .then((comment) =>
      res.status(200).json({ message: "The Post has been updated." })
    )
    .catch((err) => res.status(500).json({ error: err }));
});

/*DELETE WAND CORE COMMENT*/
router.delete("/delete/wand-core/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };
  Comment.findOne(query)
    .then((comment) => {
      if (req.user.id === comment.userId || req.user.isAdmin === "true") {
        Comment.destroy(query).then((comment) =>
          res.status(200).json({ message: "This comment has been deleted." })
        );
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/*GET Wand Wood COMMENTS*/
router.get("wand-wood/:wwId", validateSession, function (req, res) {
  Comment.findAll({
    where: {
      wandWoodId: req.params.wwId,
    },
  })
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*CREATING A COMMENT (Wand Wood)*/
router.post("/create/wand-wood/:wwId", validateSession, function (req, res) {
  const commentEntry = {
    comment: req.body.comment.comment,
    userId: req.user.id,
    wandWoodId: req.params.wwId,
  };
  Comment.create(commentEntry)
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

/*UPDATE WAND WOOD COMMENT*/
router.put("/edit/wand-wood/:id", validateSession, function (req, res) {
  const updateCommentEntry = {
    comment: req.body.comment.comment,
  };
  const query = { where: { id: req.params.id, userId: req.user.id } };
  Comment.update(updateCommentEntry, query)
    .then((comment) =>
      res.status(200).json({ message: "The Post has been updated." })
    )
    .catch((err) => res.status(500).json({ error: err }));
});

/*DELETE WAND WOOD COMMENT*/
router.delete("/delete/wand-wood/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };
  Comment.findOne(query)
    .then((comment) => {
      if (req.user.id === comment.userId || req.user.isAdmin === "true") {
        Comment.destroy(query).then((comment) =>
          res.status(200).json({ message: "This comment has been deleted." })
        );
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/*GET OWN COMMENTS*/
router.get("/mine", validateSession, function (req, res) {
  let userid = req.user.id;
  Comment.findAll({
    where: { userId: userid },
  })
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
