import React from "react";
import * as ULT from "../../Interfaces";
import Throw from "./Throw";
import "./Throw.css";
import throwTextGen from "./TextGen";
import { Button, Collapse } from "react-bootstrap";

interface ThrowsMenuProps {
  throws: Array<ULT.Throw>;
}

const ThrowsMenu = (props: ThrowsMenuProps) => {
  let throws = props.throws;
  const [open, setOpen] = React.useState<boolean>(true);

  let style = {
    width: "100%",
    marginBottom: "0px",
    paddingLeft: "5px",
    paddingBottom: "2px",
    fontSize: "1.5rem",
  };

  return (
    <div className="throws-menu" style={{ display: "inline-block" }}>
      <span style={style}>Throw Tracker</span>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Open
      </Button>
      <Collapse in={open}>
        <div style={{ borderTop: "2px solid gray" }}>
          {throws.map((ULTthrow: ULT.Throw) => (
            <Throw throws={ULTthrow} score={throwTextGen(ULTthrow)} />
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default ThrowsMenu;
