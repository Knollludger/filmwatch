import React from "react";
import { Stage, Layer, Star, Text, Rect, Line } from "react-konva";
import "./App.css";

const App = () => {
  function generateShapes() {
    return [...Array(10)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 180,
      isDragging: false,
    }));
  }
  const INITIAL_STATE = generateShapes();
  const [stars, setStars] = React.useState(INITIAL_STATE);

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

  let width: number = 1500 * 1.1 * 0.8;
  let height: number = 1500 * 0.4 * 0.8;
  return (
    <div className="App">
      <header className="App-header">
        <Stage
          width={width}
          height={height}
          style={{ border: "2px solid gray" }}
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
              <Star
                key={star.id}
                id={star.id}
                x={star.x}
                y={star.y}
                numPoints={5}
                innerRadius={20}
                outerRadius={40}
                fill="#89b717"
                opacity={0.8}
                draggable
                rotation={star.rotation}
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
