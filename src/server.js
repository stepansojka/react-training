const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();

let users = [];

app.get("/users", (req, res) => res.json(users));

app.post("/users", jsonParser, (req, res) => {
  user = { ...req.body, id: users.length };
  users = [...users, user];

  res.json(user);
});

app.listen(3001);
