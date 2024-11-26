import "./styles.css";

import { Header } from "./components/Header.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Link } from "./components/Link.jsx";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

export default function App() {
  return (
    <Header>
      <Link href="#">
        <img className="round-image" src={logo} alt="logo" />
      </Link>
      <Navigation>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#impressum">Impressum</Link>
      </Navigation>
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <img className="round-image" src={avatar} alt="avatar" />
      </button>

      <main>content goes here…</main>
    </Header>
  );
}
