import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={increment}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
