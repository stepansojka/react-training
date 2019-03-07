import { createActions } from "reduxsauce";

const Actions = createActions({
  addUser: ["user"],
  usersLoaded: ["users"]
});

export const UserActionTypes = Actions.Types;

export const UserActionCreators = Actions.Creators;
