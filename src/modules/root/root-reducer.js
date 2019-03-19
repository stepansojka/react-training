import { combineReducers } from "redux";
import { entitiesReducer } from "@salsita/react-entities";
import { apiReducer } from "@salsita/react-api";
import { crudReducer } from "@salsita/react-crud";
import { routerReducer } from "@salsita/react-router";
import { formsReducer } from "@salsita/react-forms";

import { headerReducer } from "modules/root/header-reducer";

export const rootReducer = combineReducers({
  header: headerReducer,
  entities: entitiesReducer,
  api: apiReducer,
  crud: crudReducer,
  router: routerReducer,
  form: formsReducer
});
