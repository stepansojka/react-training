import { createActions } from "reduxsauce";

const Actions = createActions({
  addUser: ["user"]
});

export const UserActionTypes = Actions.Types;

export const UserActionCreators = Actions.Creators;
