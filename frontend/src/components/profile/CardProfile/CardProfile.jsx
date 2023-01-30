import "./CardProfile.css";

function CardProfile() {
  return (
    <div className="card-profile">
      <div className="card-profile-avatar">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
        />
      </div>
      <div className="card-profile-block">
        <div className="card-profile-firstname">John</div>
        <div className="card-profile-lastname">Doe</div>
        <div className="card-profile-job">Web Developer</div>
        <div className="card-profile-email">anthony.gorsky@mail.fr</div>
        <div className="card-profile-phone">06 00 00 00 00</div>
      </div>
    </div>
  );
}

export default CardProfile;
