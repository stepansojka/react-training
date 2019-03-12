import { createSelector } from "reselect";
import { toRoman } from "roman-numerals";

import { getUsers } from "modules/entities/entities-selectors";

export const getTitle = state => state.header.title;

const getUserIds = state => state.user.users;

const getVisibleUsers = createSelector(
  getUserIds,
  getUsers,
  (ids, users) => ids.map(id => users[id])
);

export const getUserList = createSelector(
  getVisibleUsers,
  users => {
    return users.map(user => ({
      ...user,
      lastName: user.lastName.toUpperCase(),
      regnalNumber: toRoman(user.regnalNumber)
    }));
  }
);
