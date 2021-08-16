import * as ULT from "../../Interfaces";

const throwTextGen = (Throw: ULT.Throw) => {
  let result =
    Throw.throwResult === ULT.ThrowResult.Score
      ? " scored on a "
      : " turned the disc over on a ";
  return (
    "Shame." +
    result +
    ULT.ThrowAngle[Throw.angle].toLowerCase() +
    " " +
    ULT.ThrowType[Throw.type].toLowerCase() +
    "."
  );
};

export default throwTextGen;
