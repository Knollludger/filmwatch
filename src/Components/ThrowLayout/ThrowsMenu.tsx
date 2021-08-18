import React from "react";
import * as ULT from "../../Interfaces";
import Throw from "./Throw";
import "./Throw.css";
import throwTextGen from "./TextGen";
import { Collapse } from "react-bootstrap";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface ThrowsMenuProps {
  throws: Array<ULT.Throw>;
  setStars: (stars: Array<ULT.Point>) => void;
}

const ThrowsMenu = (props: ThrowsMenuProps) => {
  let throws = props.throws;
  let setStars = props.setStars;
  const [open, setOpen] = React.useState<boolean>(true);

  let style = {
    paddingLeft: "5px",
    paddingBottom: "2px",
    fontSize: "1.5rem",
  };

  return (
    <div className="throws-menu" style={{ display: "inline-block" }}>
      <div>
        <span style={style}>Throw Tracker</span>
        {open ? (
          <FaCaretDown
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            size={28}
            className="throws-icon"
          />
        ) : (
          <FaCaretUp
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            size={28}
            className="throws-icon"
          />
        )}
      </div>
      <Collapse in={open}>
        <div style={{ borderTop: "2px solid gray" }}>
          {throws.map((ULTthrow: ULT.Throw) => (
            <Throw
              throws={ULTthrow}
              score={throwTextGen(ULTthrow)}
              setStars={setStars}
            />
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default ThrowsMenu;
