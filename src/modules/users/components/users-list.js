import React, { PureComponent } from "react";
//import PropTypes from 'prop-types';

export class UserList extends PureComponent {
  state = {
    users: []
  };

  // static propTypes = {
  //     users: PropTypes.arrayOf(
  //         PropTypes.shape({
  //             id: PropTypes.number.isRequired,
  //             firstName: PropTypes.string.isRequired,
  //             lastName: PropTypes.string.isRequired
  //         }).isRequired
  //     ).isRequired
  // }

  addUser = (firstName, lastName) => {
    this.setState(({ users }) => ({
      users: [
        ...users,
        {
          id: users.length,
          firstName,
          lastName
        }
      ]
    }));
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
        <button onClick={() => this.addUser("Arya", "Stark")}>user 1</button>
        <button onClick={() => this.addUser("Daenerys", "Targaryen")}>
          user 2
        </button>
      </div>
    );
  }
}
