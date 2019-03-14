import { wrapApiCall } from "@salsita/react-api";

import { ApiClient } from "modules/api/api-client";

export const fetchUsers = wrapApiCall(() => {
  //  console.log("fetching users");
  return ApiClient.get("/users");
});

export const addUser = wrapApiCall(user => ApiClient.post("/users", user));
