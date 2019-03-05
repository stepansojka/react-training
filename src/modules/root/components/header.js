import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return <h1>{this.props.title}</h1>;
  }
}
