import React from "react";
import * as ULT from "../../Interfaces";
import "./Throw.css";
interface ThrowProps {
  throws: ULT.Throw;
  score: string;
  setStars: (stars: Array<ULT.Point>) => void;
}

const Throw = (props: ThrowProps) => {
  let throws = props.throws;
  let score = props.score; //score will be backfilled from the result of all throws.
  // border-left: 10px solid red;
  let borderColor: string =
    throws.throwResult === ULT.ThrowResult.Score ? "green" : "red";

  let onClick = () => {
    props.setStars(throws.toPoints());
  };

  return (
    <div
      className="throw-body"
      style={{ borderLeft: "10px solid " + borderColor }}
      onClick={onClick}
    >
      <>{score}</>
    </div>
  );
};

export default Throw;
