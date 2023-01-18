import "../leftBar/ItemBar.css";
import birthdayImg from "../../../public/img/birthday-img.png";

export default function Birthday() {
  return (
    <div className="birthdayContainer">
      <img src={birthdayImg} alt="" className="birthdayImg" />
      <span className="birthdayText">
        Happy birthday
        <b>Pola Foster</b>
      </span>
    </div>
  );
}
