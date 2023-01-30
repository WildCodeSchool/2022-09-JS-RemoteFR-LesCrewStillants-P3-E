import "./Profile.css";
import Header from "@components/header/Header";
import LeftBar from "@components/leftBar/LeftBar";
import Post from "@components/postbody/PostBody";

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
          <Post />
        </div>
        <div className="container" />
      </div>
    </div>
  );
}

export default ProfileFake;
