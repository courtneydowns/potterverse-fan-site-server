require("dotenv").config();

const express = require("express");
const app = express();

const sequelize = require("./db");

const controllers = require("./controllers");

let user = require("./controllers/usercontroller");
let profile = require("./controllers/profilecontroller");
let comment = require("./controllers/commentcontroller");

sequelize.sync({
  // force: true,
});

app.use(require("./middleware/headers"));

app.use(express.json());

app.use("/potions", controllers.potions);
app.use("/magical-objects", controllers.magical_objects);
app.use("/characters", controllers.characters);
app.use("/potion-ingredients", controllers.potion_ingredients);
app.use("/spells", controllers.spells);
app.use("/wand-core", controllers.wand_core);
app.use("/wand-wood", controllers.wand_wood);

app.use("/user", user);

app.use("/profile", profile);

app.use("/comment", comment);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
