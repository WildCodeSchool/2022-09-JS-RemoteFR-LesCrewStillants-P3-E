import React from "react";
import "./Feed.css";
import Header from "../../components/header/Header";
import Post from "../../components/postComponent/Post";
import fakeFeed from "../../assets/images/fake-feed.png";

export default function Feed() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Post />
      <div className="fake-feed">
        <img className="feed-fake" src={fakeFeed} alt="feed-fake" />
      </div>
    </>
  );
}
