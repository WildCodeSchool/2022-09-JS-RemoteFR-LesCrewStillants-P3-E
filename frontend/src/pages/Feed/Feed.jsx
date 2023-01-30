import React from "react";
import jwtDecode from "jwt-decode";
import "./Feed.css";
import Header from "../../components/header/Header";
import Post from "../../components/postComponent/Post";
import Avatar from "../../components/profile/Avatar";
import fakeFeed from "../../assets/images/fake-feed.png";

export default function Feed() {
  const token = jwtDecode(localStorage.getItem("token"));

  return (
    <>
      <div>
        <Header />
      </div>
      <Avatar token={token} />
      <Post />
      <div className="fake-feed">
        <img className="feed-fake" src={fakeFeed} alt="feed-fake" />
      </div>
    </>
  );
}
