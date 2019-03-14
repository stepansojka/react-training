import { wrapApiCall } from "@salsita/react-api";

import { ApiClient } from "modules/api/api-client";

export const fetchUsers = wrapApiCall(() => {
  //  console.log("fetching users");
  return ApiClient.get("/users");
});

export const saveUser = wrapApiCall(user => ApiClient.post("/users", user));

export const updateUser = user =>
  wrapApiCall(ApiClient.patch(`/users/${user.id}`, user));

export const fetchSkills = wrapApiCall(() =>
  ApiClient.get("/skills").then(response => response.data)
);
