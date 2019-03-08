import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { UserActionCreators } from "modules/users/user-actions";
import { getUserList } from "modules/users/user-selectors";

const DumbUserList = ({ users, addUser }) => (
  <div>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.firstName} {user.regnalNumber} {user.lastName}
        </li>
      ))}
    </ul>
    <button
      onClick={() => addUser({ firstName: "Homer", lastName: "Simpson" })}
    >
      Homer
    </button>
    <button onClick={() => addUser({ firstName: "Lisa", lastName: "Simpson" })}>
      Lisa
    </button>
  </div>
);

DumbUserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  users: getUserList(state)
});

const mapDispatchToProps = {
  addUser: UserActionCreators.addUser
};

export const UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbUserList);
