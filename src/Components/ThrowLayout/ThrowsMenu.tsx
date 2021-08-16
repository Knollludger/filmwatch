import React from "react";
import * as ULT from "../../Interfaces";
import Throw from "./Throw";
import "./Throw.css";

interface ThrowsMenuProps {
  throws: Array<ULT.Throw>;
}

const ThrowsMenu = (props: ThrowsMenuProps) => {
  let throws = props.throws;
  return (
    <div className="throws-menu">
      {throws.map((ULTthrow: ULT.Throw) => (
        <Throw throws={ULTthrow} score="AMP 1 - 2 Shame." />
      ))}
    </div>
  );
};

export default ThrowsMenu;
