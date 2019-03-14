import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { buildRouter } from "@salsita/react-router";
import { buildStore } from "@salsita/react-core";

import { Root } from "modules/root/components/root";
import { rootReducer } from "modules/root/root-reducer";
import { rootSaga } from "modules/root/root-saga";
import * as Routes from "modules/router/routes";

const router = buildRouter(Routes.ROUTES, {
  defaultRoute: Routes.USER_LIST.name
});

router.start();

const store = buildStore(rootReducer, rootSaga, router);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
