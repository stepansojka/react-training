import { ADD_USER } from "modules/users/user-actions";

const initState = {
  users: []
};

export const userReducer = ({ users } = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...users, { ...action.payload, id: users.length }]
      };
    default:
      return { users };
  }
};
