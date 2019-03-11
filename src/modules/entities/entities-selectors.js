import { createSelector } from "reselect";
import { denormalize } from "normalizr";

import { users } from "modules/entities/entities-schema";

const getUserIds = state => state.user.users;

const getEntities = state => state.entities;

export const getUsers = createSelector(
  getEntities,
  getUserIds,
  (entities, ids) => {
    const r = denormalize(ids, users, entities);

    if (ids.length === 0) return [];

    return r.users;
  }
);
