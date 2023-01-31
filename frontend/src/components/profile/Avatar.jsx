import React, { useState } from "react";
import axios from "axios";
import "./avatar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import ChangeAvatar from "./ChangeAvatar";
import nopic from "../../assets/images/nopicture.png";

function Avatar({ token }) {
  const [showModalAvatar, setShowModalAvatar] = useState(false);
  const [userAvatar, setUserAvatar] = useState("");

  const handleCluck = () => {
    setShowModalAvatar(!showModalAvatar);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${token.id}`)
      .then((res) => {
        console.warn(res.data);
        setUserAvatar(res.data.avatar);
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div>
      {showModalAvatar ? (
        <ChangeAvatar handleCluck={handleCluck} token={token} />
      ) : null}

      <div className="avtar">
        <img
          src={
            userAvatar
              ? `${import.meta.env.VITE_BACKEND_URL}/avatar/${userAvatar}`
              : nopic
          }
          alt="avatar"
          className="imgAv"
        />
        <button onClick={handleCluck} className="changeAv" type="button">
          <FontAwesomeIcon icon={faCameraRetro} />
        </button>
      </div>
    </div>
  );
}

export default Avatar;
