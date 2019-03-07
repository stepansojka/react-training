import { createSelector } from "reselect";

export const getTitle = state => state.header.title;

const getUsers = state => state.user.users;

export const getUserList = createSelector(
  getUsers,
  users =>
    users.map(user => ({ ...user, lastName: user.lastName.toUpperCase() }))
);
