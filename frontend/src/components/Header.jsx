import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="/src/assets/images/enedis-logo.png" alt="logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Recherche" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeRoundedIcon} title="Accueil" />
        <HeaderOption Icon={SmsRoundedIcon} title="Messages" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notification" />
      </div>
    </div>
  );
}

export default Header;
