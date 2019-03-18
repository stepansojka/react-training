import { call, put, takeEvery } from "redux-saga/effects";
import { saveEntity, fetchEntities } from "@salsita/react-crud";
import { RouterActions } from "@salsita/react-router";

import { UserActionTypes } from "modules/users/user-actions";

import { USER_LIST as USER_LIST_ROUTE } from "modules/router/routes";

import { USER, USER_LIST } from "modules/crud/crud-entities";
import {
  mapEntityToSaveParams,
  mapRouteToFetchParams
} from "modules/crud/crud-saga";

export function* saveUser({ user }) {
  try {
    yield call(saveEntity, user, USER, mapEntityToSaveParams);
    yield call(fetchUsers);
    yield put(RouterActions.Creators.navigateTo(USER_LIST_ROUTE.NAME));
  } catch (e) {
    console.error(e);
  }
}

export function* fetchUsers() {
  yield call(fetchEntities, USER_LIST, mapRouteToFetchParams);
}

export function* userSaga() {
  yield takeEvery(UserActionTypes.SAVE_USER, saveUser);
}
