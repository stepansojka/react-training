import React from "react";

import { Header } from "modules/root/components/header";
import { UserList } from "modules/users/components/users-list";

const Root = () => (
  <div>
    <Header title="hello, world!" />
    <UserList />
  </div>
);

export default Root;
