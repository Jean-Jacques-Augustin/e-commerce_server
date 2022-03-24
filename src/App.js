const express = require("express");
const { PORT } = require("./constantes");
const Connexion = require("./databases/db");
const bodyParser = require("body-parser");
const UserRouter = require("./controllers/user");

const App = express();

Connexion();

App.get("/", (req, res) => {
     res.send("Bienvenue dans mon api");
});

/**
 * ! Routes
 */

App.use(bodyParser.json());

App.use("/user", UserRouter);

/**
 * End routes
 */

App.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
