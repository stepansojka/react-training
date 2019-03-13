import React from "react";
import { reduxForm } from "redux-form";
import { FormField } from "@salsita/react-forms";

const UserFormInternal = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <FormField type="text" label="first name" />{" "}
  </form>
);

export const UserForm = reduxForm({ form: "user" })(UserFormInternal);
