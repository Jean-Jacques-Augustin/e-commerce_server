const { default: mongoose } = require("mongoose");
const { DB_URL } = require("../constantes");

const Connexion = async () => {
     await mongoose.connect(DB_URL, (err) => {
          if (err) {
               console.log("Erreur de connexion au base de donnée" + err);
          }
          console.log("Database connected");
     });
};

module.exports = Connexion;
