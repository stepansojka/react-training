import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "@salsita/react-router";

import { getSelectedUser } from "modules/users/user-selectors";
import { USER_LIST } from "router/routes";

const DumbUserDetail = ({ user }) => (
  <div>
    <h1>
      {user.firstName} {user.regnalNumber} {user.lastName}
    </h1>
    <ul>
      {user.skills.map(skill => (
        <li key={user.id + "_" + skill.skill.id}>
          {skill.skill.name}: level {skill.level}
        </li>
      ))}
    </ul>
    <Link name={USER_LIST.name}>BACK</Link>
  </div>
);

DumbUserDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    regnalNumber: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  user: getSelectedUser(state)
});

export const UserDetail = connect(mapStateToProps)(DumbUserDetail);