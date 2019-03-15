import React from "react";
import { reduxForm } from "redux-form";
import { FormField } from "@salsita/react-forms";
import { FormFieldSelect } from "@salsita/react-forms";
import { FormValidations } from "@salsita/react-forms";
import { connect } from "react-redux";

import { getCurrentUser, getSkillList } from "modules/users/user-selectors";

const validateFirstName = FormValidations.notEmptyString(
  "first name cannot be empty"
);
const validateLastName = FormValidations.notEmptyString(
  "last name cannot be empty"
);

const UserFormInternal = ({ handleSubmit, skills }) =>
  console.log(skills) || (
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
      <FormFieldSelect
        options={skills}
        closeMenuOnSelect={false}
        name="skills"
      />
      <button type="submit">Save</button>
    </form>
  );

const mapStateToProps = state => ({
  skills: getSkillList(state)
});

export const UserForm = reduxForm({ form: "user" })(
  connect(mapStateToProps)(UserFormInternal)
);
