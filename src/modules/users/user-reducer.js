import { createReducer } from "reduxsauce";

import { ADD_USER } from "modules/users/user-actions";

const initState = {
  users: []
};

const addUser = ({ users }, { payload }) => {
  console.log(users);
  return {
    users: [...users, { ...payload, id: users.length }]
  };
};

const handlers = {
  [ADD_USER]: addUser
};

export const userReducer = createReducer(initState, handlers);
