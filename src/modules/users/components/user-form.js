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

const validateSkills = skills => {
  if (!Boolean(skills)) {
    return "a user has to have at least one skill";
  }

  const uniqueSkills = new Set(skills);
  if (uniqueSkills.size < skills.length) {
    return "skills have to be unique";
  }

  return undefined;
};

const renderSkills = ({ fields, skills }) => (
  <div>
    <ul>
      {fields.map(field => (
        <li key={field}>
          <FormFieldSelect options={skills} name={field} />
        </li>
      ))}
    </ul>
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
  skills: getSkillList(state)
});

// export const UserForm = connect(state => ({
//   initialValues: { firstName: "emil" }
// }))(reduxForm({ form: "user" })(connect(mapStateToProps)(UserFormInternal)));

export const UserForm = reduxForm({ form: "user" })(
  connect(mapStateToProps)(UserFormInternal)
);
