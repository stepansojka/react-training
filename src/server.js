const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let userCount = 0;
let users = {};

const donutEating = {
  id: "skill-1",
  name: "eating donuts"
};

const saxophonePlaying = {
  id: "skill-2",
  name: "playing saxophone"
};

const reading = {
  id: "skill-3",
  name: "reading philosophy books"
};

const allSkills = [donutEating, saxophonePlaying, reading];

const userSkill = (skill, regnalNumber) => ({
  skill,
  level: Math.pow(2, regnalNumber)
});

const computeRegnalNumber = name =>
  Object.keys(users).reduce(
    (count, userId) => (users[userId].firstName === name ? count + 1 : count),
    1
  );

const createUser = ({ firstName, lastName, skills }) => {
  const regnalNumber = computeRegnalNumber(firstName);
  const id = `user-${userCount}`;

  return {
    id,
    firstName,
    lastName,
    regnalNumber,
    skills: skills.map(skill => userSkill(skill, regnalNumber))
  };
};

app.get("/users", (req, res) => res.json(users));

app.get("/skills", (req, res) => res.json(allSkills));

app.get("/users/:id", (req, res) => res.json(users[req.params.id]));

app.patch("/users/:id", (req, res) => {
  const user = { ...req.body, id: req.params.id };
  users[req.params.id] = user;

  res.json(user);
});

app.post("/users", (req, res) => {
  const user = createUser(req.body);

  users[user.id] = user;
  userCount += 1;

  res.json(user);
});

app.listen(3001);
