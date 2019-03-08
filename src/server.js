const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let users = [];

app.get("/users", (req, res) => res.json(users));

app.post("/users", (req, res) => {
  const user = { ...req.body, id: users.length };
  users = [...users, user];

  res.json(user);
});

app.listen(3001);
