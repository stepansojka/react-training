import { addUser, fetchUser, fetchUsers } from "modules/users/user-effects";
import { RouterSelectors } from "@salsita/react-router";

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
        user: {
          effect: fetchUser,
          schema: user,
          effectParamsFactory: state => [
            RouterSelectors.getRouteParams(state).id
          ]
        }
      };
    default:
      return {};
  }
};
