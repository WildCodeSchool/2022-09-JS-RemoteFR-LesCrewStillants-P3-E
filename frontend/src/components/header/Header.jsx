import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import Avatar from "@mui/material/Avatar";
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
        <button type="button" className="profile_btn">
          <Avatar
            alt="Mustapha SAID"
            sx={{ width: 30, height: 30 }}
            src="/static/images/avatar/1.jpg"
          />{" "}
          Mustapha
        </button>
      </div>
    </div>
  );
}

export default Header;
