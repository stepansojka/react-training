import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTitle } from "modules/users/user-selectors";

const DumbHeader = ({ title }) => <h1>{title}</h1>;

DumbHeader.propTypes = {
  title: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  title: getTitle(state)
});

export const Header = connect(mapStateToProps)(DumbHeader);
