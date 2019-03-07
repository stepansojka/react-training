import { fork, takeEvery } from "redux-saga/effects";

import { addUser, fetchUsers } from "modules/users/users-saga";
import { UserActionTypes } from "modules/users/user-actions";

export function* rootSaga() {
  yield fork(fetchUsers);
  yield takeEvery(UserActionTypes.ADD_USER, addUser);
}
