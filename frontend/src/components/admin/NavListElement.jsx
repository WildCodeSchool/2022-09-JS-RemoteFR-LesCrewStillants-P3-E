import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavListElement({ icon, name, classes, href }) {
  return (
    <Link to={`/admin/${href}`}>
      <li className={classes}>
        <FontAwesomeIcon className="navListIcon" icon={icon} />{" "}
        <span className="navListText">{name}</span>
      </li>
    </Link>
  );
}
