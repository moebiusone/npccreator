import React from "react";
import PropTypes from "prop-types";
import "./Trait.css";
import { Traits } from "../data/Traits";

export function Trait(props) {
    var traits = new Traits();
    var attr = '';
    if (props.name) {
      attr = traits.getTrait(props.name).attribute;
    }
    return (
        <div className='trait'>
          <span>{props.name} ({attr})</span>
        </div>
      );
}

Trait.propTypes = {
    name: PropTypes.string.isRequired
};

export default Trait;