import "./Profile.css";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "@components/header/Header";
import LeftBar from "@components/leftBar/LeftBar";
import Post from "@components/postComponent/Post";
import Rightbar from "@components/rightBar/Rightbar";
import CardProfile from "@components/profile/CardProfile/CardProfile";
import PostBody from "@components/postbody/PostBody";
import findDateDistanceStrict from "@services/dates/findDateDistanceStrict";
import formatDate from "@services/dates/formatDate";

function ProfileFake() {
  const { id } = useParams();

  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/publication/${id}`)
      .then((res) => {
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
          <CardProfile />
          <div className="myPublications">
            <h2>Mes Publications</h2>
          </div>
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
        </div>
        <div className="right" />
        <Rightbar />
        <div className="container" />
      </div>
    </div>
  );
}

export default ProfileFake;
