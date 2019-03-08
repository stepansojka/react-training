import { createReducer } from "reduxsauce";

import { UserActionTypes } from "modules/users/user-actions";

const initState = {
  users: []
};

const usersLoaded = (state, { users }) => ({
  ...state,
  users
});

const handlers = {
  [UserActionTypes.USERS_LOADED]: usersLoaded
};

export const userReducer = createReducer(initState, handlers);
