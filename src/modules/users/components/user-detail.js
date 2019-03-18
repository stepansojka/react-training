import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "@salsita/react-router";

import { getCurrentUser } from "modules/users/user-selectors";
import { USER_LIST } from "modules/router/routes";
import { UserUpdate } from "modules/users/components/user-update";

const DumbUserDetail = ({ user }) => {
  if (!user) {
    return (
      <div>
        user not found <br /> <Link name={USER_LIST.name}>BACK</Link>
      </div>
    );
  } else {
    return (
      <div>
        <UserUpdate />
        <Link name={USER_LIST.name}>BACK</Link>
      </div>
    );
  }
};

DumbUserDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    regnalNumber: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        skill: PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        }),
        level: PropTypes.number.isRequired
      }).isRequired
    ).isRequired
  })
};

const mapStateToProps = state => ({
  user: getCurrentUser(state)
});

export const UserDetail = connect(mapStateToProps)(DumbUserDetail);
