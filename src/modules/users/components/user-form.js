import React from "react";
import { reduxForm, FieldArray } from "redux-form";
import { FormField } from "@salsita/react-forms";
import { FormFieldSelect } from "@salsita/react-forms";
import { FormValidations } from "@salsita/react-forms";
import { connect } from "react-redux";

import { getSkills } from "modules/entities/entities-selectors";

const validateFirstName = FormValidations.notEmptyString(
  "first name cannot be empty"
);
const validateLastName = FormValidations.notEmptyString(
  "last name cannot be empty"
);

const validateSkills = skills => {
  if (!Boolean(skills)) {
    return "a user has to have at least one skill";
  }

  const uniqueSkills = new Set(skills.map(skill => skill.id));
  if (uniqueSkills.size < skills.length) {
    return "skills have to be unique";
  }

  return undefined;
};

const validateSingleSkill = skill => {
  if (skill && Object.keys(skill).length === 0) {
    return "a skill has to be selected";
  }
};

const renderSkills = ({ fields, skills, meta: { error, dirty } }) => (
  <div>
    <ul>
      {fields.map(field => (
        <li key={field}>
          <FormFieldSelect
            options={skills}
            name={field}
            validate={validateSingleSkill}
            labelKey="name"
          />
        </li>
      ))}
    </ul>
    {dirty && <div>{error}</div>}
    <button type="button" onClick={() => fields.push({})}>
      add skill
    </button>
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
    <FieldArray
      name="skills"
      skills={skills}
      component={renderSkills}
      validate={validateSkills}
    />
    <button type="submit">save</button>
  </form>
);

const mapStateToProps = state => ({
  skills: getSkills(state)
});

const userForm = name =>
  reduxForm({ form: name })(connect(mapStateToProps)(UserFormInternal));

export const UserCreateForm = userForm("createUser");

export const UserUpdateForm = userForm("updateUser");
