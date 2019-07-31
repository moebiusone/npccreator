import React from "react";
import PropTypes from "prop-types";
import "./Trait.css";

const Traits = require('../data/Traits');

function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function Trait(props) {
    var traits = new Traits();
    var name = props.name;
    var attr = '';

    if (name) {
      if (name.match(/{(.*)}/) !== null) {
        attr = name.match(/{(.*)}/)[0];
        attr = attr.replace('{', '');
        attr = attr.replace('}', '');
        attr = jsUcfirst(attr);
        name = name.substring(0, name.indexOf('{'));
      } else { 
        attr = traits.getTrait(props.name).attribute;
      }
    }
    return (
        <div className='trait'>
          <span>{name + " (" + attr + ")"}</span>
        </div>
      );
}

Trait.propTypes = {
    name: PropTypes.string.isRequired
};

export default Trait;