import { addUser, fetchUsers } from "modules/users/user-effects";

import { user, users } from "modules/entities/entities-schema";
import { USER } from "modules/crud/crud-entities";

import * as Routes from "modules/router/routes";

export const mapEntityToSaveParams = (entity, isUpdate) => {
  switch (entity) {
    case USER:
      return {
        effect: addUser,
        schema: user
      };
    default:
      return {};
  }
};

export const mapRouteToFetchParams = route => {
  switch (route) {
    case Routes.USER_LIST.name:
      return {
        users: {
          effect: fetchUsers,
          schema: users
        }
      };
    case Routes.USER_DETAIL.name:
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
