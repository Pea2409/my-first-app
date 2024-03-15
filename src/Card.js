import profilePic from "./assets/personal.jpg";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        height="200"
        src={profilePic}
        alt="profile picture"
      ></img>
      <h2 className="card-title">Pea Code</h2>
      <p className="card-info">I am student and study ReactJS</p>
    </div>
  );
}
export default Card;
