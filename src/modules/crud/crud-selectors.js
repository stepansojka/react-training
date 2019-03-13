import { createSelector } from "reselect";

import { RouterSelectors } from "@salsita/react-router";
import { getUsers } from "modules/entities/entities-selectors";

const getUserIds = state =>
  state.crud && state.crud.users ? state.crud.users.users : [];

export const getVisibleUsers = createSelector(
  getUserIds,
  getUsers,
  (ids, users) => ids.map(id => users[id])
);

export const getSelectedUser = createSelector(
  getUsers,
  RouterSelectors.getRouteParams,
  (users, params) => users[params.id]
);
