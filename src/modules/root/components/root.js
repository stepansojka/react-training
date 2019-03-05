import React from "react";

import { Header } from "modules/root/components/header";
import { UserList } from "modules/users/components/users-list";

export const Root = ({ title, users, addUser }) => (
  <div>
    <Header title={title} />
    <UserList users={users} addUser={addUser} />
  </div>
);
