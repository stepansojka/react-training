import React from "react";
import PropTypes from "prop-types";

export const UserList = ({ users, addUser }) => (
  <div>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
    <button onClick={() => addUser("Arya", "Stark")}>user 1</button>
    <button onClick={() => addUser("Daenerys", "Targaryen")}>user 2</button>
  </div>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
