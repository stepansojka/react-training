import React from "react";
import { connect } from "react-redux";

import { UserCreateForm } from "modules/users/components/user-form";
import { UserActionCreators } from "modules/users/user-actions";

const DumbUserCreate = ({ saveUser }) => <UserCreateForm onSubmit={saveUser} />;

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  saveUser: UserActionCreators.saveUser
};

export const UserCreate = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbUserCreate);
