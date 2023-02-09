import "./Navbar.css";
import {
  faBell,
  faHome,
  faMessage,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo-enedis.png";
import avatarProfil from "../../../public/img/avatar-profil.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <div className="logoNavbar">
          <img src={logo} alt="Enedis logo" />
        </div>
        <div className="header-search">
          <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input type="text" placeholder="Recherche" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarRightItem">
          <div className="itemIcon">
            {" "}
            <FontAwesomeIcon icon={faHome} />
          </div>
          Accueil
        </div>
        <div className="navbarRightItem">
          <div className="itemIcon">
            <FontAwesomeIcon icon={faMessage} />
          </div>
          Messages
        </div>
        <div className="navbarRightItem">
          <div className="itemIcon">
            <FontAwesomeIcon icon={faBell} />
          </div>
          Notifications
        </div>
        <div className="profilAvatar">
          <img src={avatarProfil} alt="Avatar Profil" /> Profil
        </div>{" "}
      </div>
    </div>
  );
}

export default Navbar;
