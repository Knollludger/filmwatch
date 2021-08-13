import React from "react";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { Left } from "react-bootstrap/lib/Media";
import { Stage, Layer, Circle, Line, Rect } from "react-konva";
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
  const [stars, setStars] = React.useState<Array<Point>>([]);
  const [Lines, setLines] = React.useState<Array<number>>([]);

  const ondrag = (e: any) => {
    const target = e.target;
    const id = e.target.id();

    setStars(
      stars.map((star) => {
        if (star.id === id) {
          return {
            ...star,
            x: target.attrs.x,
            y: target.attrs.y,
          };
        } else {
          return star;
        }
      })
    );
    if (stars.length === 2) {
      setLines([stars[0].x, stars[0].y, stars[1].x, stars[1].y]);
    }
  };

  const pointHandleClick = (e: any) => {
    const id = e.target.id();
    if (stars.length === 2) {
      setLines([stars[0].x, stars[0].y, stars[1].x, stars[1].y]);
    }
    setStars(
      stars.map((star) => {
        if (star.id === id) {
          return {
            ...star,
            completion: !star.completion,
          };
        } else {
          return star;
        }
      })
    );
  };

  const handleDragStart = (e: any) => {
    const id = e.target.id();
    if (stars.length === 2) {
      setLines([stars[0].x, stars[0].y, stars[1].x, stars[1].y]);
    }
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e: any) => {
    if (stars.length === 2) {
      setLines([stars[0].x, stars[0].y, stars[1].x, stars[1].y]);
    }
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };
  const StagehandleClick = (e) => {
    let stage = e.target.getStage();
    const emptySpace = stage.getPointerPosition();
    if (stars.length < 2) {
      let tempstars = stars.concat({
        id: stars.length.toString(),
        x: emptySpace.x,
        y: emptySpace.y,
        isDragging: false,
        thrower: stars.length === 0,
        completion: stars.length === 1,
      });
      if (tempstars.length === 2) {
        setLines([
          tempstars[0].x,
          tempstars[0].y,
          tempstars[1].x,
          tempstars[1].y,
        ]);
      }
      setStars(tempstars);
    } else {
      setLines([stars[0].x, stars[0].y, stars[1].x, stars[1].y]);
    }
  };

  let width: number = 1500 * 1.1 * 0.8;
  let height: number = 1500 * 0.4 * 0.8;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ultimate Film Tracker</h1>
        <div className="App-Body">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Shame.</span>
            <span>AMP</span>
          </div>
          <Stage
            width={width}
            height={height}
            style={{ border: "2px solid gray" }}
            onClick={StagehandleClick}
          >
            <Layer>
              <Line
                points={[(width * 20) / 110, 0, (width * 20) / 110, height]}
                stroke="gray"
                strokeWidth={2}
              />
              <Line
                points={[(width * 90) / 110, 0, (width * 90) / 110, height]}
                stroke="gray"
                strokeWidth={2}
              ></Line>
            </Layer>
            <Layer>
              <Rect
                x={0}
                y={0}
                height={height}
                width={(width * 20) / 110}
                fill="red"
                opacity={0.25}
              />
              <Rect
                x={(width * 90) / 110}
                y={0}
                height={height}
                width={(width * 20) / 110}
                fill="blue"
                opacity={0.25}
              />
              <Line
                points={Lines}
                stroke="white"
                strokeWidth={2}
                dash={[10, 5]}
              />
              {stars.map((star) => (
                <Circle
                  key={star.id}
                  id={star.id}
                  x={star.x}
                  y={star.y}
                  radius={20}
                  fill={
                    star.thrower ? "gold" : star.completion ? "green" : "red"
                  }
                  opacity={0.8}
                  draggable
                  shadowColor="black"
                  shadowBlur={10}
                  shadowOpacity={0.6}
                  shadowOffsetX={star.isDragging ? 10 : 5}
                  shadowOffsetY={star.isDragging ? 10 : 5}
                  scaleX={star.isDragging ? 1.2 : 1}
                  scaleY={star.isDragging ? 1.2 : 1}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onClick={pointHandleClick}
                  onDragMove={ondrag}
                />
              ))}
            </Layer>
          </Stage>
        </div>
      </header>
    </div>
  );
};

export default App;
