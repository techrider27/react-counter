import ReactDOM from "react-dom/client";
import { React, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <div className="child">
        <h1>{counter}</h1>
        <h3>React Counter</h3>
        <div className="flex">
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increase
          </button>
          <button
            onClick={() => {
              counter === 0
                ? alert("counter reached zero")
                : setCounter(counter - 1);
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Counter />);
