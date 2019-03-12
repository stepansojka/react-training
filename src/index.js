import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { buildRouter } from "@salsita/react-router";
import { buildStore } from "@salsita/react-core";

import { Root } from "modules/root/components/root";
import { rootReducer } from "modules/root/root-reducer";
import { rootSaga } from "modules/root/root-saga";
import * as routes from "router/routes";

const router = buildRouter([routes.USER_LIST, routes.USER_DETAIL], {
  defaultRoute: routes.USER_LIST.name
});

router.start();

const store = buildStore(rootReducer, rootSaga, router);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
