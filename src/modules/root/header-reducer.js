import { createReducer } from "reduxsauce";

const initState = {
  title: "test"
};

export const headerReducer = createReducer(initState, {});
