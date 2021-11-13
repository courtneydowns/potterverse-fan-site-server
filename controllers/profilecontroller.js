const express = require("express");
const router = express.Router();
const { Profile } = require("../models");
const validateSession = require("../middleware/validateSession");

/*CREATE PROFILE*/
router.post("/create", validateSession, function (req, res) {
  const profileCreate = {
    // profileImage: req.body.user.profileImage,
    bio: req.body.profile.bio,
    house: req.body.profile.house,
    favoriteHarryPotterBook: req.body.profile.favoriteHarryPotterBook,
    favoriteHarryPotterMovie: req.body.profile.favoriteHarryPotterMovie,
    favoriteHarryPotterCharacter: req.body.profile.favoriteHarryPotterCharacter,
    userId: req.user.id,
  };
  Profile.create(profileCreate)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ error: err }));
});

/*EDIT PROFILE*/
router.put("/edit", validateSession, function (req, res) {
  const query = { where: { userId: req.user.id }, returning: true };
  Profile.update(req.body.profile, query)
    .then((profile) =>
      res.status(200).json({
        profile: profile[1][0],
        message: "Your profile has been updated.",
      })
    )
    .catch((err) => res.status(500).json({ error: err }));
});

/*VIEW OWN PROFILE*/
router.get("/", validateSession, function (req, res) {
  const query = {
    where: { userId: req.user.id },
  };
  Profile.findOne(query)
    .then((profile) => res.status(200).json(profile))
    .catch((err) => res.status(500).json({ error: err }));
});

/*GET USER'S PROFILE*/
router.get("/:username", validateSession, function (req, res) {
  const getUserProfile = {
    id: req.params.id,
    username: req.user.username,
  };
  Profile.findOne(getUserProfile)
    .then((profile) => res.status(200).json(profile))
    .catch((err) => res.status(500).json({ error: err }));
});

/*DELETE PROFILE*/
router.delete("/delete/:profileId", validateSession, function (req, res) {
  const query = { where: { id: req.params.profileId, userId: req.user.id } };
  Profile.destroy(query)
    .then((profile) =>
      res
        .status(200)
        .json({ message: "Your profile has been successfully deleted." })
    )
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
