import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/admin/Header";
import NavLeft from "../../components/admin/NavLeft";

export default function Home() {
  return (
    <div className="admin">
      <NavLeft elemActive="" />
      <main>
        <Header />
        <div className="content">
          <h1>
            <FontAwesomeIcon icon={faHome} /> Home
          </h1>
        </div>
      </main>
    </div>
  );
}
