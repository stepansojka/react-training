const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let users = [];

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

const userSkill = (skill, regnalNumber) => ({
  skill,
  level: Math.pow(2, regnalNumber)
});

const getSkills = (name, regnalNumber) => {
  skills =
    name.toLowerCase() === "lisa" ? [saxophonePlaying, reading] : [donutEating];

  return skills.map(skill => userSkill(skill, regnalNumber));
};

const computeRegnalNumber = name =>
  users.reduce(
    (count, user) => (user.firstName === name ? count + 1 : count),
    1
  );

const createUser = ({ firstName, lastName }) => {
  const regnalNumber = computeRegnalNumber(firstName);

  return {
    id: `user-${users.length}`,
    firstName,
    lastName,
    regnalNumber,
    skills: getSkills(firstName, regnalNumber)
  };
};

app.get("/users", (req, res) => res.json({ users }));

app.post("/users", (req, res) => {
  const user = createUser(req.body);

  users = [...users, user];

  res.json(user);
});

app.listen(3001);
