import { fork } from "redux-saga/effects";

import { userSaga } from "modules/users/users-saga";

export function* rootSaga() {
  yield fork(userSaga);
}
