import React from "react";
import "./styles.css";

function Button({ color, disabled, text }) {
  return (
    <button style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}

export default function App() {
  return <Button color={"blue"} disabled={false} text={"Click me!"} />;
}
