const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express(); //créer serveur
app.use(cors()); // authorisation de requete

app.get("/", (req, res) => {
  res.status(200).json(data);
});

// Northflank va nous fournir une variable process.env.PORT
// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3200, () => {
//     console.log("Server started");
//   });
// }

app.all("*", (req, res) => {
  res.status(404).json({ message: error.message });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server started");
});
