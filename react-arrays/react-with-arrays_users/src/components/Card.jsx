import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
import { USERS } from "../db";
function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {user.roles.map((role) => {
          return <Tag tag={role} key={role} />;
        })}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
