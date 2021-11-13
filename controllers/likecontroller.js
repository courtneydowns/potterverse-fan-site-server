const express = require("express");
const router = express.Router();
const { Like, Comment } = require("../models");
const validateSession = require("../middleware/validateSession");

/*LIKE COMMENT*/
router.post("/:liked_id", validateSession, (req, res) => {
  if (req.params.liked_id == req.user.id) {
    res
      .status(200)
      .json({ message: "You have liked this comment." })
      .catch((err) => res.status(420).json(err));
  } else {
    Comment.findOne({ where: { id: req.params.liked_id } }).then((entry) => {
      if (!entry) {
        res.status(420).json({ message: "This comment does not exist!" });
      } else {
        Like.findOne({
          where: { liked_userId: req.params.liked_id, userId: req.user.id },
        })
          .then((like) => {
            if (like) {
              res
                .status(400)
                .json({ message: "You already liked this comment!" });
            } else {
              Like.create({
                liked_userId: req.params.liked_id,
                userId: req.user.id,
              }).then((like) => {
                res.status(200).json({
                  message: `Added comment ${req.params.liked_id} to likes`,
                  like,
                });
              });
            }
          })
          .catch((err) => {
            res
              .status(400)
              .json({ message: "Oops. Something went wrong", err });
          });
      }
    });
  }
});

/*UNLIKE A COMMENT*/
router.delete("/:liked_id", validateSession, (req, res) => {
  Like.destroy({
    where: { liked_userId: req.params.liked_id, userId: req.user.id },
  }).then((like) => {
    res.status(200).json(
      like > 0
        ? {
            message: `You have removed comment ${req.params.liked_id} from your liked comments.`,
            deleteCount: like,
          }
        : { message: "No matches to delete!" }
    );
  });
});
