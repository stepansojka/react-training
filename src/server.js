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

const userSkills = (skills, regnalNumber) =>
  skills.map(skill => userSkill(skill, regnalNumber));

const computeRegnalNumber = name =>
  Object.keys(users).reduce(
    (count, userId) => (users[userId].firstName === name ? count + 1 : count),
    1
  );

const createUser = ({ firstName, lastName, skills }) => {
  const regnalNumber = computeRegnalNumber(firstName);
  const id = `user-${userCount}`;

  userCount += 1;

  return {
    id,
    firstName,
    lastName,
    regnalNumber,
    skills: userSkills(skills, regnalNumber)
  };
};

app.get("/users", (req, res) => {
  const u = Object.keys(users).reduce(
    (userArray, userId) => [...userArray, users[userId]],
    []
  );
  res.json(u);
});

app.get("/skills", (req, res) => res.json(allSkills));

app.get("/users/:id", (req, res) => {
  if (!users[req.params.id]) {
    res.send(404);
    return;
  }

  res.json(users[req.params.id]);
});

app.patch("/users/:id", (req, res) => {
  if (!users[req.params.id]) {
    res.send(404);
    return;
  }

  const update = req.body;
  const id = req.params.id;
  const user = users[id];

  console.log(update.skills);

  users[id] = {
    ...user,
    firstName: update.firstName,
    lastName: update.lastName,
    skills: userSkills(update.skills, user.regnalNumber)
  };

  res.json(users[id]);
});

app.post("/users", (req, res) => {
  const user = createUser(req.body);

  users[user.id] = user;
  res.json(user);
});

app.listen(3001);
