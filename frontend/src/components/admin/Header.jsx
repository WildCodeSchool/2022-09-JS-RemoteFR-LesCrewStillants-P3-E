import React, { useState } from "react";
import "../../assets/css/admindashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNavicon,
  faChevronDown,
  faSearch,
  faUser,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import nopicture from "../../assets/images/nopicture.png";

export default function Header() {
  const [showUserNav, setShowUserNav] = useState(false);

  const hundleClickShowUserNav = () => {
    setShowUserNav(!showUserNav);
  };

  return (
    <header>
      <div className="header-search">
        <FontAwesomeIcon
          // onClick={hundleClickShowNav}
          className="navIcon"
          icon={faNavicon}
        />
        <input type="text" placeholder="Recherche" />
        <div className="searchIcon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="header-user">
        <img className="avatar" alt="User avatar" src={nopicture} />
        <div
          onClick={hundleClickShowUserNav}
          onKeyDown={hundleClickShowUserNav}
          className="header-userName"
          role="none"
        >
          Christine Leroy
          <FontAwesomeIcon className="avatar-chevron" icon={faChevronDown} />
        </div>
        {showUserNav ? (
          <ul className="userNav">
            <li>
              <FontAwesomeIcon icon={faUser} /> Mon profil
            </li>
            <li>
              <FontAwesomeIcon icon={faSignOut} /> Déconnexion
            </li>
          </ul>
        ) : null}
      </div>
    </header>
  );
}
