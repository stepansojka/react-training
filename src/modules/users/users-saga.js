import { call, fork, put, takeEvery } from "redux-saga/effects";
import { normalizeAndStore } from "@salsita/react-entities";

import * as Api from "modules/users/user-effects";
import { UserActionTypes } from "modules/users/user-actions";
import { UserActionCreators } from "modules/users/user-actions";
import { users as userSchema } from "modules/entities/entities-schema";

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
    const result = yield call(() => normalizeAndStore(users, userSchema));

    yield put(UserActionCreators.usersLoaded(result));
  } catch (e) {
    console.error(e);
  }
}

export function* userSaga() {
  yield fork(fetchUsers);
  yield takeEvery(UserActionTypes.ADD_USER, addUser);
}
