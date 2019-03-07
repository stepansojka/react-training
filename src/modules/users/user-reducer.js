import { createReducer } from "reduxsauce";

import { UserActionTypes } from "modules/users/user-actions";

const initState = {
  users: []
};

const usersLoaded = (_, { users }) => ({
  users
});

const handlers = {
  [UserActionTypes.USERS_LOADED]: usersLoaded
};

export const userReducer = createReducer(initState, handlers);
