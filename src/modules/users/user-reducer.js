import { createReducer } from "reduxsauce";

import { UserActionTypes } from "modules/users/user-actions";

const initState = {
  users: []
};

const addUser = ({ users }, { user }) => ({
  users: [...users, { ...user, id: users.length }]
});

const handlers = {
  [UserActionTypes.ADD_USER]: addUser
};

export const userReducer = createReducer(initState, handlers);
