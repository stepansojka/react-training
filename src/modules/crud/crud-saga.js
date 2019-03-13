import { saveUser, fetchUsers } from "modules/users/user-effects";
import { user, users } from "modules/entities/entities-schema";
import { USER, USER_LIST } from "modules/crud/crud-entities";

export const mapEntityToSaveParams = (entity, isUpdate) => {
  switch (entity) {
    case USER:
      return {
        effect: saveUser,
        schema: user
      };
    default:
      return {};
  }
};

export const mapRouteToFetchParams = route => {
  switch (route) {
    case USER_LIST:
      return {
        users: {
          effect: fetchUsers,
          schema: users
        }
      };
    default:
      return {};
  }
};
