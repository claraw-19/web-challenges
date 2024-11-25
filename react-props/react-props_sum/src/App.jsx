import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}

export default function App() {
  return <Sum valueA={9} valueB={3} />;
}
