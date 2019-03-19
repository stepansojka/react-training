import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "@salsita/react-router";

import { getUserList } from "modules/users/user-selectors";

import { USER_DETAIL } from "modules/router/routes";
import { UserCreate } from "modules/users/components/user-create";

const DumbUserList = ({ users }) => (
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

export const UserList = connect(mapStateToProps)(DumbUserList);
