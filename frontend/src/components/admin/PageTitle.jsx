import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageTitle({ title, icon }) {
  return (
    <h1>
      <FontAwesomeIcon icon={icon} /> {title}
    </h1>
  );
}
