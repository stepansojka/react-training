import React from "react";
import ReactDOM from "react-dom";

import { Root } from "modules/root/components/root";

let users = [];

const render = () =>
  ReactDOM.render(
    <Root title="hello, world!" users={users} addUser={addUser} />,
    document.getElementById("root")
  );

const addUser = (firstName, lastName) => {
  users = [
    ...users,
    {
      id: users.length,
      firstName,
      lastName
    }
  ];

  render();
};

render();
