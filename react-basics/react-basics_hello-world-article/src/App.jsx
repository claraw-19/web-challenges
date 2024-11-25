import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>This is the Hello-World-Article.</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
