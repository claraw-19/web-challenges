import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="aticle__title">Hello World!</h2>
      <label htmlFor="userInput"></label>
      <input id="userInput"></input>
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        What ist React?
      </a>
    </article>
  );
}
