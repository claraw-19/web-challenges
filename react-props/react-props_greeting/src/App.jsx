import "./styles.css";

function Greeting({ name }) {
  const coaches = ["Peter", "Klaus", "Esraa", "Andrea"];
  const isCoach = coaches.includes(name);
  // return <h1>{isCoach ? "Hello, Coach!" : `Hello, ${name}!`}</h1>;
  return <h1>Hello {isCoach ? "Coach" : name}</h1>;
}

export default function App() {
  return <Greeting name="Clara" />;
}
