import { createActions } from "reduxsauce";

const Actions = createActions({
  saveUser: ["user"]
});

export const UserActionTypes = Actions.Types;

export const UserActionCreators = Actions.Creators;
