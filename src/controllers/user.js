const express = require("express");
const User = require("../models/users");

const Router = express.Router();

Router.post("/addUser", (req, res, next) => {
     const data = req.body;
     const { name, email, password } = data;
     console.log(data);
     const newUser = new User({ name, email, password });
     try {
          newUser.save();
          console.log("Ajout avec succès");
          res.send("Ajout avec succès");
     } catch (error) {
          res.send("Erreur d'inscription");
          console.log("Erreur d'inscription");
     }
     next();
});

Router.get("/users", (req, res, next) => {
     const users = User.find();
     console.log(users);
     res.send(users);
});

module.exports = Router;
