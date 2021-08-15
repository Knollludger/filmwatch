import React from "react";
import * as ULT from "../../Interfaces";

interface ThrowProps {
  throws: ULT.Throw;
  score: string;
}

const Throw = (props: ThrowProps) => {
  let throws = props.throws;
  let score = "1 - 2"; //score will be backfilled from the result of all throws.

  return <div>Score = {score}</div>;
};

export default Throw;
