/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./postComponent.css";
import gifIcon from "../../assets/images/gif-icon.png";
import pdfIcon from "../../assets/images/pdf-icon.png";
import eventIcon from "../../assets/images/event-icon.png";
import avatarE from "../../assets/images/avatar-e.png";
import photoIcon from "../../assets/images/photo-icon.png";
import AddPost from "./AddPost";

function Post() {
  const [showModalAddPost, setShowModalAddPost] = useState(false);

  const handleClickAddPost = () => {
    setShowModalAddPost(!showModalAddPost);
  };
  /*   const [postText, setPostText] = useState("");
   */ const [postMedia, setPostMedia] = useState({
    picture: null,
    pdf: null,
    gif: null,
    event: null,
  });

  const handlePostMediaChange = (e) => {
    setPostMedia({ ...postMedia, [e.target.name]: e.target.files[0] });
  };

  // eslint-disable-next-line no-unused-vars
  const handlePublishPost = () => {
    const postData = new FormData();
    postData.append("text", postText);
    postData.append("picture", postMedia.picture);
    postData.append("pdf", postMedia.pdf);
    postData.append("gif", postMedia.gif);
    postData.append("event", postMedia.event);
    fetch("/api/publishpost", {
      method: "POST",
      body: postData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.warn(data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <div className="post-total">
      <form>
        {showModalAddPost ? (
          <AddPost handleClickAddPost={handleClickAddPost} />
        ) : null}
        <div className="user-info">
          <img src={avatarE} alt="Avatar" />

          <textarea
            placeholder="Commencer un post"
            onClick={handleClickAddPost}
          />
        </div>
        <div className="media-buttons">
          <label>
            <input
              type="file"
              accept="image/*"
              name="picture"
              onChange={handleClickAddPost}
            />
            <img className="image-button" src={photoIcon} alt="add-button" />
          </label>
          <label>
            <input
              type="file"
              accept="application/pdf"
              name="pdf"
              onChange={handleClickAddPost}
            />
            <img className="pdf-button" src={pdfIcon} alt="Pdf-button" />
          </label>
          <label>
            <input
              type="file"
              accept="image/*, video/*"
              name="gif"
              onChange={handleClickAddPost}
            />
            <img className="gif-button" src={gifIcon} alt="Gif-button" />
          </label>
          <label>
            <input
              type="file"
              accept="image/*, video/*"
              name="event"
              onChange={handleClickAddPost}
            />
            <img
              className="calendar-button"
              src={eventIcon}
              alt="Calendar-button"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Post;
