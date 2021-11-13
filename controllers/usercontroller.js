let express = require("express");
const { User } = require("../models");
let router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validateSession = require("../middleware/validateSession");

/*GET USERS ENDPOINT */
router.get("/", function (req, res) {
  User.findAll()
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ error: err }));
});

/* SIGNUP*/
router.post("/signup", function (req, res) {
  User.create({
    profileImage: req.body.user.profileImage,
    username: req.body.user.username,
    email: req.body.user.email,
    password: bcrypt.hashSync(req.body.user.password, 13),
    isAdmin: req.body.user.isAdmin,
  })
    .then(function createSuccess(user) {
      let token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        {
          expiresIn: 60 * 60 * 24,
        }
      );
      res.json({
        user: user,
        message: "User successfully created!",
        sessionToken: token,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/*LOGIN*/

router.post("/", function (req, res) {
  console.log(process.env.JWT_SECRET);
  User.findOne({
    where: {
      username: req.body.user.username,
    },
  })
    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(req.body.user.password, user.password, (err, match) => {
          if (match) {
            let token = jwt.sign(
              { id: user.id, username: user.username },
              process.env.JWT_SECRET,
              { expiresIn: 60 * 60 * 270 }
            );

            res.status(200).json({
              user: user,
              message: "User successfully logged in!",
              sessionToken: token,
            });
          } else {
            res.status(403).json({ error: "Password is incorrect" });
          }
        });
      } else {
        res.status(500).json({ error: "User does not exist." });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/*DELETE USER */
// router.delete("/admin/delete/:id", validateSession, function (req, res) {
//   if (req.user.isAdmin === "true") {
//     const query = { where: { id: req.params.id } };
//     User.destroy(query)
//       .then((user) => res.status(200).json(user))
//       .catch((err) => res.status(500).json({ error: err }));
//   } else {
//     res.status(401).json({ message: "Unauthorized" });
//   }
// });

module.exports = router;
