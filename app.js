import ReactDOM from "react-dom/client";
import { React, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter === 0) {
      setCounter(0);
      alert("counter already reached 0");
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="container">
      <div className="child">
        <h1>{counter}</h1>
        <h3>React Counter</h3>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Counter />);
