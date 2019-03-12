import { createSelector } from "reselect";

const getEntities = state => state.entities;

const getSkills = createSelector(
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

const getUserSkills = createSelector(
  getNormalizedUserSkills,
  getSkills,
  (normalizedUserSkills, skills) => {
    if (!normalizedUserSkills) return {};

    return Object.keys(normalizedUserSkills).reduce((userSkills, key) => {
      const [userId, skillId] = key.split("_");
      if (!(userId in userSkills)) {
        userSkills[userId] = {
          skills: [{ ...normalizedUserSkills[key], skill: skills[skillId] }]
        };
      } else {
        userSkills[userId] = {
          skills: [
            ...userSkills[userId].skills,
            { ...normalizedUserSkills[userId], skill: skills[skillId] }
          ]
        };
      }

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
      users[key] = { ...normalizedUsers[key], ...userSkills[key] };
      return users;
    }, {});
  }
);
