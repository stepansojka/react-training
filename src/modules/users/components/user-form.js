import React from "react";
import { reduxForm, FieldArray } from "redux-form";
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

const renderSkills = ({ fields, skills }) => (
  <div>
    <FormFieldSelect
      options={skills}
      name="skill"
      onChange={({ value }) => console.log(fields) || fields.push(value)}
    />
    <ul>
      {fields.map(
        (field, index, fields) =>
          fields.forEach(field => console.log(field)) || (
            <li key={index}>{fields[index]}</li>
          )
      )}
    </ul>
  </div>
);

const UserFormInternal = ({ handleSubmit, skills }) => (
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
    <FieldArray name="skills" skills={skills} component={renderSkills} />
    <button type="submit">Save</button>
  </form>
);

const mapStateToProps = state => ({
  skills: getSkillList(state)
});

export const UserForm = reduxForm({ form: "user" })(
  connect(mapStateToProps)(UserFormInternal)
);
