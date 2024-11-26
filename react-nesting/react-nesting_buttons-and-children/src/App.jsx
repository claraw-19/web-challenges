import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Text 1</Button>
      <Button>Text 2</Button>
      <Button>Text 3</Button>
      <Button>Text 4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
