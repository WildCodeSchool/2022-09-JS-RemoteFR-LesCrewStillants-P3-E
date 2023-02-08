import React, { useState, useEffect } from "react";
import axios from "axios";
import findDateDistanceStrict from "@services/dates/findDateDistanceStrict";
import formatDate from "@services/dates/formatDate";
import RightBar from "../components/rightBar/Rightbar";
import LeftBar from "../components/leftBar/LeftBar";
import PostBody from "../components/postbody/PostBody";
import Header from "../components/header/Header";
import Comments from "../components/postbody/comments/Comments";
import "../components/postbody/maison.css";
import "./Home.css";
import Post from "../components/postComponent/Post";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/publication`).then((res) => {
      setPosts(res.data);
    });
  }, []);

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
          {posts.map((post) => (
            <PostBody
              name={`${post.firstname} ${post.lastname}`}
              description={post.fonction}
              message={post.text}
              Img={post.avatar}
              date={findDateDistanceStrict(formatDate(post.date))}
            />
          ))}
          <div>
            <Comments currentUserId="1" />
          </div>
        </div>
        <div className="right">
          <RightBar />
        </div>
        <div className="container" />
      </div>
    </div>
  );
}
