import React from "react";
import PropTypes from "prop-types";
import "./Field.css";

export function Field(props) {
  if (props.label) {
    return (
      <div className="column">
        <div id="field" className="row">
          <p className="field-label">{props.label}</p>
          <textarea className="field-value" readOnly value={props.value}/>
        </div>
      </div>
    );
  }
  // else return empty space
  return (
    <div className="column">
      <div className="row">
      </div>
      </div>
    );
}

Field.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any
};

export default Field;