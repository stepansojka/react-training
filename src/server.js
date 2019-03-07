const express = require("express");

const app = express();

const users = [];

app.get("/users", (req, res) => res.json(users));

app.post("/users", (req, res) => {
  users = [...users, { ...user, id: users.length }];
});

app.listen(3001);
