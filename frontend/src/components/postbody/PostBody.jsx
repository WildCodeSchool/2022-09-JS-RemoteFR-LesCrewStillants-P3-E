import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./maison.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import InputOption from "./InputOption";
import Comments from "./comments/Comments";

function PostBody({ name, description, message, date, Img }) {
  const [showComponent, setShowComponent] = useState(false);
  const [likes, setLikes] = useState(0);
  // const [userLiked, setUserLiked] = useState(false);

  function handleClick() {
    setShowComponent(!showComponent);
  }

  const handleLike = () => {
    setLikes(likes + 1);
  };

  // useEffect(() => {
  // check if current user liked the post
  // checkIfUserLiked();
  // }, []);

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
      <div className="post_core">
        {message}
        <div>{Img}</div>
      </div>
      <div className="Social">
        <div className="Social_left">
          <img src="/public/img/coeur.png" alt="" />
          <p>{likes}</p>
        </div>
        <div className="Social_left">
          <img src="/public/img/comment.png" alt="" />
          <p>0</p>
        </div>
      </div>

      <div className="line-1" />
      <div className="post_button">
        <div onClick={handleLike} role="button" tabIndex={0} className="Like">
          <InputOption
            Icon={FavoriteBorderIcon}
            title="J'aime"
            color="#343A3F"
          />
        </div>
        <div role="button" tabIndex={0} onClick={handleClick}>
          {showComponent ? (
            <div className="modal">
              <Comments />
            </div>
          ) : null}
          <InputOption
            Icon={ChatBubbleOutlineSharpIcon}
            title="Commenter"
            color="#343A3F"
          />
        </div>
      </div>
    </div>
  );
}

export default PostBody;
