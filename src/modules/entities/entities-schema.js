import { schema } from "normalizr";

const { Entity } = schema;

const skill = new Entity("skills");

const user = new Entity("users", {
  skills: [skill]
});

const userSkill = new Entity(
  "userSkills",
  { skill },
  {
    idAttribute: (value, parent) => parent.id + "-" + value.skill.id
  }
);
