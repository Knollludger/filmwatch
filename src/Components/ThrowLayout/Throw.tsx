import React from "react";
import * as ULT from "../../Interfaces";

interface ThrowProps {
  throws: ULT.Throw;
  score: string;
}

const Throw = (props: ThrowProps) => {
  let throws = props.throws;
  let score = props.score; //score will be backfilled from the result of all throws.

  return (
    <div className="throw-body">
      <span>{"Result : Turnover | "}</span>
      <span>{score}</span>
    </div>
  );
};

export default Throw;
