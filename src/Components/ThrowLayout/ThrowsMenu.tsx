import React from "react";
import * as ULT from "../../Interfaces";
import Throw from "./Throw";
import "./Throw.css";
import throwTextGen from "./TextGen";

interface ThrowsMenuProps {
  throws: Array<ULT.Throw>;
}

const ThrowsMenu = (props: ThrowsMenuProps) => {
  let throws = props.throws;

  let style = {
    width: "100%",
    marginBottom: "0px",
    paddingLeft: "5px",
    paddingBottom: "2px",
    borderBottom: "none",
  };

  if (throws.length !== 0) {
    style.borderBottom = "2px solid gray";
  }

  return (
    <div className="throws-menu">
      <h2 style={style}>Throw Tracker</h2>
      {throws.map((ULTthrow: ULT.Throw) => (
        <Throw throws={ULTthrow} score={throwTextGen(ULTthrow)} />
      ))}
    </div>
  );
};

export default ThrowsMenu;
