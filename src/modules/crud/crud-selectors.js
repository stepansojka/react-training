import { createSelector } from "reselect";

import { RouterSelectors } from "@salsita/react-router";
import { getUsers, getSkills } from "modules/entities/entities-selectors";

const getUserIds = state =>
  state.crud && state.crud.users ? state.crud.users.users : [];

const getSkillIds = state =>
  state.crud && state.crud.users && state.crud.users.skills
    ? state.crud.users.skills
    : [];

export const getSkillList = createSelector(
  getSkillIds,
  getSkills,
  (ids, skills) => ids.map(id => skills[id])
);

export const getVisibleUsers = createSelector(
  getUserIds,
  getUsers,
  (ids, users) => ids.map(id => users[id])
);

export const getSelectedUser = createSelector(
  getUsers,
  RouterSelectors.getRouteParams,
  (users, params) => {
    return users[params.id];
  }
);
