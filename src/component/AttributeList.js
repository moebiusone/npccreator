import React from "react";
import Attribute from "./Attribute";

export function AttributeList(props) {
    return (
      <div>
          {props.attributes.map(c => <Attribute key={c.name} attrname={c.name} attrvalue={c.value} />)}
      </div>
    );
  }
  
  export default AttributeList;