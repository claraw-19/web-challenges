import React from "react";
import "./styles.css";

function Button({ color, disabled, text, onClick }) {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default function App() {
  const handleClick = () => {
    console.log("You clicked me!");
  };
  return (
    <Button
      color={"blue"}
      disabled={false}
      text={"Click me!"}
      onClick={handleClick}
    />
  );
}
