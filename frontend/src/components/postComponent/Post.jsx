import React from "react";
import "./postComponent.css";
import gifIcon from "../../assets/images/gif-icon.png";
import pdfIcon from "../../assets/images/pdf-icon.png";
import eventIcon from "../../assets/images/event-icon.png";
import avatarE from "../../assets/images/avatar-e.png";
import photoIcon from "../../assets/images/photo-icon.png";

function Post() {
  return (
    <div className="post-total">
      <form>
        <div className="user-info">
          <img src={avatarE} alt="Avatar" />
          <textarea placeholder="Commencer un post" />
        </div>
        <div className="media-buttons">
          <label>
            <input type="file" accept="image/*" name="picture" />
            <img className="image-button" src={photoIcon} alt="add-button" />
          </label>
          <label>
            <input type="file" accept="application/pdf" name="pdf" />
            <img className="pdf-button" src={pdfIcon} alt="Pdf-button" />
          </label>
          <label>
            <input type="file" accept="image/*, video/*" name="gif" />
            <img className="gif-button" src={gifIcon} alt="Gif-button" />
          </label>
          <label>
            <input type="file" accept="image/*, video/*" name="event" />
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
