import { combineReducers } from "redux";
import { entitiesReducer } from "@salsita/react-entities";

import { userReducer } from "modules/users/user-reducer";
import { headerReducer } from "modules/root/header-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  header: headerReducer,
  entities: entitiesReducer
});
