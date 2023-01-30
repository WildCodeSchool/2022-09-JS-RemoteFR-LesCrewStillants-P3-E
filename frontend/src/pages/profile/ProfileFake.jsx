import "../Home.css";
import Header from "@components/header/Header";
import LeftBar from "@components/leftBar/LeftBar";
import Post from "@components/postComponent/Post";
import Rightbar from "@components/rightBar/Rightbar";
import CardProfile from "@components/profile/CardProfile/CardProfile";

function ProfileFake() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="left">
          {" "}
          <LeftBar />
        </div>
        <div className="middle">
          <CardProfile />
          <Post />
        </div>
        <div className="right" />
        <Rightbar />
        <div className="container" />
      </div>
    </div>
  );
}

export default ProfileFake;
