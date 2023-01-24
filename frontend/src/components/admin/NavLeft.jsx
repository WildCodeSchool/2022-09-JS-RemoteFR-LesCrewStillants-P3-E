import React, { useState, useEffect } from "react";
import "../../assets/css/admindashboard.css";
import {
  faHome,
  faUsers,
  faFolderTree,
  faGear,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import adminlogo from "../../assets/images/adminlogo.jpg";
import logocircle from "../../assets/images/logo-circle.png";
import NavListElement from "./NavListElement";

const navList = [
  {
    name: "Tableau de bord",
    icon: faHome,
    href: "",
  },
  {
    name: "Membres",
    icon: faUsers,
    href: "members",
  },
  {
    name: "Articles",
    icon: faNewspaper,
    href: "articles",
  },
  {
    name: "Catégories",
    icon: faFolderTree,
  },
  {
    name: "Paramètre",
    icon: faGear,
  },
];

export default function NavLeft({ elemActive }) {
  const [showNav, setShowNav] = useState(true);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      // eslint-disable-next-line no-unused-expressions
      getWindowSize().innerWidth >= 800 ? setShowNav(true) : setShowNav(false);
    }

    window.addEventListener("load", handleWindowResize);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className={showNav ? null : "hideNav"}>
      <div className="nav-header">
        <img
          className="adminLogo"
          alt="admin logo"
          src={showNav ? adminlogo : logocircle}
        />
      </div>
      <div className="nav-subheader">
        <img
          className="enedisLogoCircle"
          src={logocircle}
          alt="enedis logo circle"
        />
        <div>
          <div>Administration</div>
          <div className="spaceName">Val de france</div>
        </div>
      </div>
      <div className="navList">
        <ul>
          {navList.map((e, index) => (
            <NavListElement
              classes={e.href === elemActive ? "active" : ""}
              index={index}
              icon={e.icon}
              name={e.name}
              href={e.href}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}
