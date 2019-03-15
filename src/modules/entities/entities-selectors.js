import { createSelector } from "reselect";

const getEntities = state => {
  return state.entities;
};

export const getNormalizedSkills = createSelector(
  getEntities,
  entities => entities.skills
);

const getNormalizedUsers = createSelector(
  getEntities,
  entities => entities.users
);

const getNormalizedUserSkills = createSelector(
  getEntities,
  entities => entities.userSkills
);

export const getSkills = createSelector(
  getNormalizedSkills,
  normalizedSkills =>
    normalizedSkills
      ? Object.keys(normalizedSkills).reduce(
          (skills, key) => [...skills, normalizedSkills[key]],
          []
        )
      : []
);

const getUserSkills = createSelector(
  getNormalizedUserSkills,
  getNormalizedSkills,
  (normalizedUserSkills, skills) => {
    if (!normalizedUserSkills) return {};

    return Object.keys(normalizedUserSkills).reduce((userSkills, key) => {
      const normalizedSkill = normalizedUserSkills[key];
      userSkills[key] = {
        ...normalizedSkill,
        skill: skills[normalizedSkill.skill]
      };

      return userSkills;
    }, {});
  }
);

export const getUsers = createSelector(
  getNormalizedUsers,
  getUserSkills,
  (normalizedUsers, userSkills) => {
    if (!normalizedUsers) return {};

    return Object.keys(normalizedUsers).reduce((users, key) => {
      const normalizedUser = normalizedUsers[key];
      users[key] = {
        ...normalizedUser,
        skills: normalizedUser.skills.map(skillId => userSkills[skillId])
      };

      return users;
    }, {});
  }
);
