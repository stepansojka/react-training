import { fork } from "redux-saga/effects";
import { crudSaga } from "@salsita/react-crud";

import { userSaga } from "modules/users/users-saga";
import { mapRouteToFetchParams } from "modules/crud/crud-saga";

export function* rootSaga() {
  yield fork(crudSaga, mapRouteToFetchParams);
  yield fork(userSaga);
}
