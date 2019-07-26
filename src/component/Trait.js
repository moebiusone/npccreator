import React from "react";
import PropTypes from "prop-types";
import "./Trait.css";

export function Trait(props) {
    return (
        <div className='trait'>
          <span>{props.name}</span>
        </div>
      );
}

Trait.propTypes = {
    name: PropTypes.string.isRequired
};

export default Trait;