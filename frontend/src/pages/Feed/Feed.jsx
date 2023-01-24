import React from "react";
import "./Feed.css";
import Header from "../../components/header/Header";
import Post from "../../components/postComponent/Post";
import Avatar from "../../components/profile/Avatar";
import fakeFeed from "../../assets/images/fake-feed.png";

export default function Feed() {
  const profilePic = "toto";
  return (
    <>
      <div>
        <Header />
      </div>
      <Avatar profilePic={profilePic} />
      <Post />
      <div className="fake-feed">
        <img className="feed-fake" src={fakeFeed} alt="feed-fake" />
      </div>
    </>
  );
}
