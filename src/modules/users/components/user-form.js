import React from "react";
import { reduxForm } from "redux-form";
import { FormField } from "@salsita/react-forms";
import { FormFieldSelect } from "@salsita/react-forms";

const UserFormInternal = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <FormField type="text" name="firstName" label="first name" />
    <FormField type="text" name="lastName" label="last name" />
    <FormFieldSelect name="skills" />

    <button type="submit">Create</button>
  </form>
);

export const UserForm = reduxForm({ form: "user" })(UserFormInternal);
