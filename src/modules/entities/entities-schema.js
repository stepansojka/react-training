import { schema } from "normalizr";

const { Entity } = schema;

const skill = new Entity("skills");

const userSkill = new Entity(
  "userSkills",
  { skill },
  {
    idAttribute: (value, parent) => parent.id + "_" + value.skill.id
  }
);

export const user = new Entity("users", {
  skills: [userSkill]
});

export const users = [user];
export const skills = [skill];
