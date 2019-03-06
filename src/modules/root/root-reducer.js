import { userReducer } from "modules/users/user-reducer";

import { combineReducers } from "redux";

export const rootReducer = combineReducers({ user: userReducer });
