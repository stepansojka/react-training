import { createSelector } from "reselect";
import { toRoman } from "roman-numerals";

import { getVisibleUsers, getSelectedUser } from "modules/crud/crud-selectors";
import { getSkills } from "modules/entities/entities-selectors";

export const getTitle = state => state.header.title;

const maybe = fn => arg => (arg ? fn(arg) : arg);

const enrichUser = maybe(user => ({
  ...user,
  lastName: user.lastName.toUpperCase(),
  regnalNumber: toRoman(user.regnalNumber)
}));

export const getSkillList = createSelector(
  getSkills,
  skills =>
    skills.map(skill => ({
      ...skill,
      label: skill.name
    }))
);

export const getUserList = createSelector(
  getVisibleUsers,
  users => users.map(enrichUser)
);

export const getCurrentUser = createSelector(
  getSelectedUser,
  user => enrichUser(user)
);
