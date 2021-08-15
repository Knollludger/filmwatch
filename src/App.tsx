import React from "react";
import Field from "./Components/field";
import "./App.css";
import * as ULT from "./Interfaces";
import { Button } from "react-bootstrap";

const App = () => {
  const [throws, setThrows] = React.useState<Array<ULT.Throw>>([]);
  const [throwID, setThrowID] = React.useState<number>(0);
  const [stars, setStars] = React.useState<Array<ULT.Point>>([]);

  let makeThrow = () => {
    let point_target = stars.filter((point) => {
      return !point.thrower;
    })[0];
    let point_handler = stars.filter((point) => {
      return point.thrower;
    })[0];

    let handler = new ULT.XYPoint(point_handler.x, point_handler.y);

    let target = new ULT.Target(
      point_target.x,
      point_target.y,
      point_target.completion
    );
    propogatethrows(new ULT.Throw(throwID, handler, target));
  };

  let propogateStars = (stars: Array<ULT.Point>) => {
    console.log(stars);
    setStars(stars);
  };

  let propogatethrows = (Throw: ULT.Throw) => {
    if (
      throws.filter((x) => {
        return x.id === Throw.id;
      }).length === 0
    ) {
      setThrows(throws.concat(Throw));
    } else {
      setThrows(
        throws.map((x) => {
          if (x.id === Throw.id) {
            return Throw;
          } else {
            return x;
          }
        })
      );
    }
    nextThrow();
  };

  let nextThrow = () => {
    setThrowID(throwID + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ultimate Film Watch</h1>
        <div className="App-Body">
          <Field
            parentAddStars={propogateStars}
            throwID={throwID}
            stars={stars}
          />
          <Button onClick={makeThrow} />
          <h6>{JSON.stringify(throws)}</h6>
          <h6>{throwID}</h6>
        </div>
      </header>
    </div>
  );
};

export default App;
