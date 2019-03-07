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
