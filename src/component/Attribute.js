import React from "react";
import PropTypes from "prop-types";
import "./Attribute.css";

export function Attribute(props) {
    return (
        <div className='attribute'>
          <span className="leftside">{props.attrname}</span> : <span className="rightside">{props.attrvalue}</span>
        </div>
      );
}

Attribute.propTypes = {
    attrname: PropTypes.string.isRequired,
    attrvalue: PropTypes.number.isRequired
};

export default Attribute;