const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    title: "Sapphire",
    version: "2.1.0",
    status: "success",
    message: "CI/CD learning!",
    date: new Date(),
  });
});

app.listen(3000, () => {
  console.log("CI/CD learning server is running on port 3000");
});
