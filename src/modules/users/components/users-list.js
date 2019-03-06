import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addUser } from "modules/users/user-actions";

const DumbUserList = ({ users, addUser }) => (
  <div>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
    <button onClick={() => addUser({ firstName: "Arya", lastName: "Stark" })}>
      user 1
    </button>
    <button
      onClick={() => addUser({ firstName: "Daenerys", lastName: "Targaryen" })}
    >
      user 2
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

const mapStateToProps = ({ user: { users } }) => ({
  users
});

const mapDispatchToProps = {
  addUser
};

export const UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbUserList);
