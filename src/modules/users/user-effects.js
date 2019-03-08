import { ApiClient } from "modules/api/api-client";

export const fetchUsers = () =>
  ApiClient.get("/users").then(response => response.data);

export const addUser = user => ApiClient.post("/users", user);
