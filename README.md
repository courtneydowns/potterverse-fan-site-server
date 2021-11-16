# Potterverse Server

## Overview

Welcome to Potterverse<br>

The purpose of this project is to create an all-inclusive Harry Potter fan site where fans will have a welcoming place to go, regardless of sexual orientation, sexual identification, race, gender, etc.<br>

The server-side encrypts data, utilizes Postgres, uses database associations, and runs endpoints (http requests).<br>

Potterverse is an interactive encyclopedia of the following categories: Characters, Magical Objects, Potions, Potion Ingredients, Spells, Wand Cores, and Wand Woods. Users can create comments on entries, edit them, view their comments and other's comments, and delete them. They can also view their profile that they create upon sign up, edit their profile and delete their profile. Users cannot see any of the site unless they are logged in or after they sign up.

## Code Example

Here is an example of the code:

```
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
```

The router.post is used as an endpoint to populate the Character data in the database. There is one of these for each of the categories. The router.get is used to get all characters in the JSON document I created and is used to populate them on the screen using componentDidMount().

## Tech-Framework Used

The following Tech/Frameworks covered:

### Node-Server

- User Authentication
- Database Associations
- Utilizing Postgres
- jsonwebtoken, bcrypt, and middleware
- Creating 51 endpoints (try/catch)
- Creating 10 data models

#### Github

- [A link to the Potterverse Server Github Repository](https://github.com/courtneydowns/potterverse-fan-site-server)
