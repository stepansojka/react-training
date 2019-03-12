import React from "react";

import { Header } from "modules/root/components/header";
import { UsersRoute } from "modules/users/components/users-route";

export const Root = () => (
  <div>
    <Header />
    <UsersRoute />
  </div>
);
