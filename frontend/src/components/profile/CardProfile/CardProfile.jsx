import "./CardProfile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CardProfile() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div className="card-profile">
      <div className="card-profile-avatar">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
        />
      </div>
      <div className="card-profile-block">
        <div className="card-profile-firstname">{user.firstname}</div>
        <div className="card-profile-lastname">{user.lastname}</div>
        <div className="card-profile-job">{user.fonction}</div>
        <div className="card-profile-email">{user.mail}</div>
        <div className="card-profile-phone">{user.phone}</div>
      </div>
    </div>
  );
}

export default CardProfile;
