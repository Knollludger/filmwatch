import React from "react";
import Field from "./Components/field";
import "./App.css";
interface Point {
  id: string;
  x: number;
  y: number;
  isDragging: boolean;
  thrower: boolean;
  completion: boolean;
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ultimate Film Watch</h1>
        <div className="App-Body">
          <Field />
        </div>
      </header>
    </div>
  );
};

export default App;
