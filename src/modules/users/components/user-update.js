import React from "react";
import { connect } from "react-redux";

import { UserUpdateForm } from "modules/users/components/user-form";
import { UserActionCreators } from "modules/users/user-actions";
import { getCurrentUser } from "modules/users/user-selectors";

const DumbUserUpdate = ({ currentUser, saveUser }) => (
  <UserUpdateForm
    initialValues={currentUser}
    onSubmit={thing => console.log("in form:", thing) || saveUser(thing)}
  />
);

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = {
  saveUser: UserActionCreators.saveUser
};

export const UserUpdate = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbUserUpdate);
