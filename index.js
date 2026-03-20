const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("666");
});


app.listen(3006, () => {
  console.log("Servidor on");
});