import React from "react";
import Field from "./Components/field";
import "./App.css";
import * as ULT from "./Interfaces";

const App = () => {
  const [throws, setThrows] = React.useState<Array<ULT.Throw>>([]);

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
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ultimate Film Watch</h1>
        <div className="App-Body">
          <Field parentAddThrow={propogatethrows} throwID={1} />
          <h1>{JSON.stringify(throws)}</h1>
        </div>
      </header>
    </div>
  );
};

export default App;
