import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  addUser: ["user"]
});

export const ADD_USER = Types.ADD_USER;

export const addUser = Creators.addUser;
