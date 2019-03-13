import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { UserForm } from "modules/users/components/user-form";
import { UserActionCreators } from "modules/users/user-actions";

const DumbUserCreate = ({ saveUser }) => <UserForm onSubmit={saveUser} />;

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  saveUser: UserActionCreators.saveUser
};

export const UserCreate = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbUserCreate);
