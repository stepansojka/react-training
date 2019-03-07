import { call, fork, put } from "redux-saga/effects";

import * as Api from "modules/users/user-effects";
import { UserActionCreators } from "modules/users/user-actions";

export function* addUser(user) {
  try {
    yield call(Api.addUser, user);
    yield fork(fetchUsers);
  } catch (e) {
    console.error(e);
  }
}

export function* fetchUsers() {
  try {
    const users = yield call(Api.fetchUsers);
    yield put(UserActionCreators.usersLoaded(users));
  } catch (e) {
    console.error(e);
  }
}
