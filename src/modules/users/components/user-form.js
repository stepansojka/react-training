import React from "react";
import { reduxForm } from "redux-form";
import { FormField } from "@salsita/react-forms";
import { FormFieldSelect } from "@salsita/react-forms";
import { FormValidations } from "@salsita/react-forms";

import { getCurrentUser } from "modules/users/user-selectors";

const validateFirstName = FormValidations.notEmptyString(
  "first name cannot be empty"
);
const validateLastName = FormValidations.notEmptyString(
  "first name cannot be empty"
);

const UserFormInternal = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <FormField
      type="text"
      name="firstName"
      validate={validateFirstName}
      label="first name"
    />
    <FormField
      type="text"
      name="lastName"
      validate={validateLastName}
      label="last name"
    />
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
