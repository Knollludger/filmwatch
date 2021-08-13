import React from "react";
import { Stage, Layer, Circle, Line } from "react-konva";
import "./App.css";

interface Point {
  id: string;
  x: number;
  y: number;
  isDragging: boolean;
}

const App = () => {
  const [stars, setStars] = React.useState<Array<Point>>([]);

  const handleDragStart = (e: any) => {
    const id = e.target.id();
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
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };
  const handleClick = (e) => {
    let stage = e.target;
    const emptySpace = stage.getPointerPosition();
    console.log(emptySpace);
    setStars(
      stars.concat({
        id: stars.length.toString(),
        x: emptySpace.x,
        y: emptySpace.y,
        isDragging: false,
      })
    );
  };

  let width: number = 1500 * 1.1 * 0.8;
  let height: number = 1500 * 0.4 * 0.8;
  return (
    <div className="App">
      <header className="App-header">
        <Stage
          width={width}
          height={height}
          style={{ border: "2px solid gray" }}
          onClick={handleClick}
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
            {stars.map((star) => (
              <Circle
                key={star.id}
                id={star.id}
                x={star.x}
                y={star.y}
                radius={20}
                fill="#89b717"
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
              />
            ))}
          </Layer>
        </Stage>
      </header>
    </div>
  );
};

export default App;
