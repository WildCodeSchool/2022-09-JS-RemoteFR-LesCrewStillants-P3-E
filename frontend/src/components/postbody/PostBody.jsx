import Avatar from "@mui/material/Avatar";
import React from "react";
import "./maison.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import InputOption from "./InputOption";

function PostBody({ name, description, message, photo, date }) {
  return (
    <div className="post_body">
      <div className="post_head">
        {" "}
        <Avatar />
        <div className="post_info">
          {" "}
          <h1>{name}</h1>
          <p>{description} </p>
          <p>{date}</p>
        </div>
      </div>
      <div className="post_core">{message}</div>
      <div className="Social">
        <div className="Social_left">
          <img src="/public/img/coeur.png" alt="" />
          <p>10</p>
        </div>
        <div className="Social_left">
          <img src="/public/img/comment.png" alt="" />
          <p>88</p>
        </div>
      </div>

      <div className="line-1" />
      <div className="post_button">
        <InputOption Icon={FavoriteBorderIcon} title="J'aime" color="#343A3F" />

        <InputOption
          Icon={ChatBubbleOutlineSharpIcon}
          title="Commenter"
          color="#343A3F"
        />
      </div>
    </div>
  );
}

export default PostBody;
