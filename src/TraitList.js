import React from "react";
import { Trait } from "./Trait";

export function TraitList(props) {
  return (
    <div>
        {props.traits.map(c => <Trait key={c} name={c} />)}
    </div>
  );
}

export default TraitList;