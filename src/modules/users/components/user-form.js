import React from "react";
import { reduxForm } from "redux-form";
import { FormField } from "@salsita/react-forms";
import { FormFieldSelect } from "@salsita/react-forms";

import { getCurrentUser } from "modules/users/user-selectors";

const UserFormInternal = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <FormField type="text" name="firstName" label="first name" />
    <FormField type="text" name="lastName" label="last name" />
    <FormFieldSelect name="skills" />

    <button type="submit">Save</button>
  </form>
);

const mapStateToProps = state => ({
  initialValues: getCurrentUser(state),
  enableReinitialize: true
});

export const UserForm = reduxForm({ form: "user" }, mapStateToProps)(
  UserFormInternal
);
