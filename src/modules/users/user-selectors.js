import { createSelector } from "reselect";
import { toRoman } from "roman-numerals";
import { RouterSelectors } from "@salsita/react-router";

import { getUsers } from "modules/entities/entities-selectors";

export const getTitle = state => state.header.title;

const getUserIds = state => state.user.users;

const getVisibleUsers = createSelector(
  getUserIds,
  getUsers,
  (ids, users) => ids.map(id => users[id])
);

const enrichUser = user => ({
  ...user,
  lastName: user.lastName.toUpperCase(),
  regnalNumber: toRoman(user.regnalNumber)
});

export const getUserList = createSelector(
  getVisibleUsers,
  users => users.map(enrichUser)
);

export const getSelectedUser = createSelector(
  getUsers,
  RouterSelectors.getRouteParams,
  (users, params) => enrichUser(users[params.id])
);
