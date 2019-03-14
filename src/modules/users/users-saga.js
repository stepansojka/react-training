import { call, fork, takeEvery } from "redux-saga/effects";
import { saveEntity, fetchEntities } from "@salsita/react-crud";

import { UserActionTypes } from "modules/users/user-actions";

import { USER, USER_LIST } from "modules/crud/crud-entities";
import {
  mapEntityToSaveParams,
  mapRouteToFetchParams
} from "modules/crud/crud-saga";

export function* saveUser({ user }) {
  try {
    yield call(saveEntity, user, USER, mapEntityToSaveParams);
    yield fork(fetchUsers);
  } catch (e) {
    console.error(e);
  }
}

export function* fetchUsers() {
  yield call(fetchEntities, USER_LIST, mapRouteToFetchParams);
}

export function* userSaga() {
  yield takeEvery(UserActionTypes.ADD_USER, saveUser);
}
