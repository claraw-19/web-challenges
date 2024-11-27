import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  const addPeople = () => setPeople(people + 1);
  const subtractPeople = () => setPeople(people - 1);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter />
      <p>You are going to reserve a table for 2 people.</p>
    </div>
  );
}
