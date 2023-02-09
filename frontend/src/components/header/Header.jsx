import { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import jwtDecode from "jwt-decode";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import Avatar from "@mui/material/Avatar";

import HeaderOption from "./HeaderOption";

function Header() {
  const [userAvatar, setUserAvatar] = useState("");
  const [userData, setUserData] = useState([]);
  const token = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${token.id}`)
      .then((res) => {
        setUserAvatar(res.data.avatar);
        setUserData(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);

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
        <div className="headerRightItem">
          <HeaderOption Icon={HomeRoundedIcon} title="Accueil" />
          <HeaderOption Icon={SmsRoundedIcon} title="Messages" />
          <HeaderOption Icon={NotificationsRoundedIcon} title="Notification" />
        </div>
        <button type="button" className="profile_btn">
          <Avatar
            alt={userData.firstname}
            sx={{ width: 32, height: 32 }}
            src={`${import.meta.env.VITE_BACKEND_URL}/avatar/${userAvatar}`}
          />{" "}
        </button>
        <span className="text-gray-600">{userData.firstname}</span>
      </div>
    </div>
  );
}

export default Header;
