const express = require("express");
const User = require("../models/users");

const Router = express.Router();

Router.post("/addUser", (req, res) => {
     const data = req.body;
     const { name, email, password } = data;
     console.log(data);
     const newUser = new User({ name: name, email: email, password: password });
     newUser.save((err) => {
          if (err) {
               console.log("Erreur d'inscription");
          }
          console.log(`Ajout de l'utilisateur ${name} avec succès`);
     });
});

module.exports = Router;
