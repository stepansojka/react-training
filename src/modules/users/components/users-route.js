import React from "react";
import { connect } from "react-redux";
import { RouterSelectors } from "@salsita/react-router";

import { USER_DETAIL } from "modules/router/routes";
import { UserList } from "modules/users/components/users-list";
import { UserDetail } from "modules/users/components/user-detail";

const DumbUsersRoute = ({ route }) => {
  if (route && route.name === USER_DETAIL.name) {
    return <UserDetail />;
  }

  return <UserList />;
};

const mapStateToProps = state => ({
  route: RouterSelectors.getCurrentRoute(state)
});

export const UsersRoute = connect(mapStateToProps)(DumbUsersRoute);
