import React from "react";
import * as ULT from "../../Interfaces";
import "./Throw.css";
interface ThrowProps {
  throws: ULT.Throw;
  score: string;
}

const Throw = (props: ThrowProps) => {
  let throws = props.throws;
  let score = props.score; //score will be backfilled from the result of all throws.
  // border-left: 10px solid red;
  let borderColor: string =
    throws.throwResult === ULT.ThrowResult.Score ? "green" : "red";

  return (
    <div
      className="throw-body"
      style={{ borderLeft: "10px solid " + borderColor }}
    >
      <em>{score}</em>
      <span>{"Result : Turnover"}</span>
    </div>
  );
};

export default Throw;
