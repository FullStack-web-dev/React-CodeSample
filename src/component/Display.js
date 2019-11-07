import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

/**
 *  Class Display
 *
 *  @author Arslan Ali
 *  @email  shayansolutions@gmail.com
 */
export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
