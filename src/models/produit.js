const { default: mongoose } = require("mongoose");

const produitSchema = new mongoose.Schema({
     nom: {
          type: String,
          required: true,
     },
});

const Produit = new mongoose.model("Produit", produitSchema);

module.exports = Produit;
