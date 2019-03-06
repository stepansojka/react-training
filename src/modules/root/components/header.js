import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const DumbHeader = ({ title }) => <h1>{title}</h1>;

DumbHeader.propTypes = {
  title: PropTypes.string.isRequired
};

const mapStateToProps = ({ header }) => ({
  title: header.title
});

export const Header = connect(mapStateToProps)(DumbHeader);
