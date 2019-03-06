import React from "react";
import ReactDOM from "react-dom";

import { Root } from "modules/root/components/root";

import { createStore } from "redux";
import { rootReducer } from "modules/root/root-reducer";
import { addUser } from "modules/users/user-actions";

const dispatchAddUser = user => store.dispatch(addUser(user));

const render = state =>
  ReactDOM.render(
    <Root title="test" users={state.user.users} addUser={dispatchAddUser} />,
    document.getElementById("root")
  );

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : v => v
);

store.subscribe(() => render(store.getState()));

render(store.getState());
