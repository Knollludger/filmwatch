import React from "react";
import * as ULT from "../../Interfaces";

interface ThrowProps {
  throws: ULT.Throw;
}

const Throw = (props: ThrowProps) => {
  let throws = props.throws;

  return <div>{JSON.stringify(throws)}</div>;
};

export default Throw;
