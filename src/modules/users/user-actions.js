export const ADD_USER = Symbol("ADD_USER");

export const addUser = user => ({
  type: ADD_USER,
  payload: user
});
