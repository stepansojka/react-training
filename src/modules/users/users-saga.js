import { call, fork, put, takeEvery } from "redux-saga/effects";

import * as Api from "modules/users/user-effects";
import { UserActionTypes } from "modules/users/user-actions";
import { UserActionCreators } from "modules/users/user-actions";

function* addUser({ user }) {
  try {
    yield call(Api.addUser, user);
    yield fork(fetchUsers);
  } catch (e) {
    console.error(e);
  }
}

function* fetchUsers() {
  try {
    const users = yield call(Api.fetchUsers);
    yield put(UserActionCreators.usersLoaded(users));
  } catch (e) {
    console.error(e);
  }
}

export function* userSaga() {
  yield fork(fetchUsers);
  yield takeEvery(UserActionTypes.ADD_USER, addUser);
}
