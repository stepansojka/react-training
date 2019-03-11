import { createSelector } from "reselect";
import { toRoman } from "roman-numerals";

import { getUsers } from "modules/entities/entities-selectors";

export const getTitle = state => state.header.title;

export const getUserList = createSelector(
  getUsers,
  users =>
    users.map(user => ({
      ...user,
      lastName: user.lastName.toUpperCase(),
      regnalNumber: toRoman(user.regnalNumber)
    }))
);
