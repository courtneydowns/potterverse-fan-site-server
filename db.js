const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: !process.env.DATABASE_URL.includes("localhost")
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false, // fixing unhandled rejection
        },
      }
    : {},
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database", err);
  });

module.exports = sequelize;
