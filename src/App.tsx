import React from "react";
import Field from "./Components/Field";
import "./App.css";
import * as ULT from "./Interfaces";
import { Button } from "react-bootstrap";
import ThrowsMenu from "./Components/ThrowLayout/ThrowsMenu";

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
    setStars(stars);
  };

  let propogateThrowID = (newID: number) => {
    setThrowID(newID);
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
    setThrowID(throws.length + 1);
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
          <ThrowsMenu
            throws={throws}
            setStars={propogateStars}
            setThrowID={propogateThrowID}
          />
        </div>
      </header>
    </div>
  );
};

export default App;
