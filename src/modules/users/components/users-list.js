import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "@salsita/react-router";

import { UserActionCreators } from "modules/users/user-actions";
import { getUserList } from "modules/users/user-selectors";
import { USER_DETAIL } from "modules/router/routes";
import { UserCreate } from "modules/users/components/user-create";

const DumbUserList = ({ users, addUser }) => (
  <div>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link name={USER_DETAIL.name} params={{ id: user.id }}>
            {user.firstName} {user.regnalNumber} {user.lastName}
          </Link>
        </li>
      ))}
    </ul>
    <UserCreate />
  </div>
);

DumbUserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      regnalNumber: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  users: getUserList(state)
});

const mapDispatchToProps = {
  addUser: UserActionCreators.saveUser
};

export const UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbUserList);
