const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to jason's home page");
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("First Project");
});
