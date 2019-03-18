import { createSelector } from "reselect";
import { toRoman } from "roman-numerals";

import { getVisibleUsers, getSelectedUser } from "modules/crud/crud-selectors";
import { getSkills } from "modules/entities/entities-selectors";

export const getTitle = state => state.header.title;

const maybe = fn => arg => (arg ? fn(arg) : arg);

const enrichSkills = maybe(skills =>
  skills.map(skill => ({
    ...skill,
    label: skill.name
  }))
);

const enrichUserSkills = maybe(skills =>
  skills.map(skill => ({
    ...skill.skill,
    label: skill.skill.name,
    level: skill.level
  }))
);

const enrichUser = maybe(user => ({
  ...user,
  lastName: user.lastName.toUpperCase(),
  regnalNumber: toRoman(user.regnalNumber),
  skills: enrichUserSkills(user.skills)
}));

export const getSkillList = createSelector(
  getSkills,
  skills => enrichSkills(skills)
);

export const getUserList = createSelector(
  getVisibleUsers,
  users => users.map(enrichUser)
);

export const getCurrentUser = createSelector(
  getSelectedUser,
  user => enrichUser(user)
);
