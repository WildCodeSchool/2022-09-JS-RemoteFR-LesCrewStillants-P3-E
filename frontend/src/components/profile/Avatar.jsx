import React, { useState, useEffect } from "react";
import "./avatar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import ChangeAvatar from "./ChangeAvatar";
// import nopic from "../../assets/images/nopicture.png";

function Avatar(profilePic) {
  const [showModalAvatar, setShowModalAvatar] = useState(false);
  // const [profilePic, setProfilePic] = useState(nopic);

  useEffect(() => {
    fetch("http://localhost:5200/users")
      .then((response) => response.json())
      .then((data) => console.warn(data));
  }, []);

  const handleCluck = () => {
    setShowModalAvatar(!showModalAvatar);
  };

  return (
    <div>
      {showModalAvatar ? <ChangeAvatar handleCluck={handleCluck} /> : null}

      <div className="avtar">
        <img src={profilePic} alt="avatar" className="imgAv" />
        <button onClick={handleCluck} className="changeAv" type="button">
          <FontAwesomeIcon icon={faCameraRetro} />
        </button>
      </div>
    </div>
  );
}

export default Avatar;
