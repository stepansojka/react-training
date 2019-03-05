import React, { PureComponent } from "react";
//import PropTypes from 'prop-types';

export class UserList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

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
    this.setState(({ users: oldUsers }) => ({
      users: [
        ...oldUsers,
        {
          id: oldUsers.length,
          firstName: firstName,
          lastName: lastName
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
        <button onClick={() => this.addUser("Daenerys", "demo")}>user 2</button>
      </div>
    );
  }
}
