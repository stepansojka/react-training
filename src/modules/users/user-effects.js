import { wrapApiCall } from "@salsita/react-api";

import { ApiClient } from "modules/api/api-client";

export const fetchUsers = wrapApiCall(() => ApiClient.get("/users"));

export const saveUser = wrapApiCall(user => ApiClient.post("/users", user));

export const updateUser = user => ApiClient.patch(`/users/${user.id}`, user);

export const fetchSkills = () =>
  ApiClient.get("/skills").then(response => response.data);
