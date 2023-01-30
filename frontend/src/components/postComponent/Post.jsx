/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import "./postComponent.css";
import Modal from "react-modal";
import gifIcon from "../../assets/images/gif-icon.png";
import pdfIcon from "../../assets/images/pdf-icon.png";
import eventIcon from "../../assets/images/event-icon.png";
import photoIcon from "../../assets/images/photo-icon.png";

function Post() {
  /*   const [postText, setPostText] = useState("");
  //  */
  const [postMedia, setPostMedia] = useState({
    picture: null,
    pdf: null,
    gif: null,
    event: null,
  });

  const [userInfos, setUserInfos] = useState([]);
  const [userAvatar, setUserAvatar] = useState("");

  const token = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .get(`http://localhost:5200/users/${token.id}`)
      .then((res) => {
        console.warn(res.data);
        setUserInfos(res.data);
        setUserAvatar(res.data.avatar);
      })
      .catch((err) => console.warn(err));
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleTextAreaClick = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  // eslint-disable-next-line no-unused-vars
  const handlePostMediaChange = (e) => {
    setPostMedia({ ...postMedia, [e.target.name]: e.target.files[0] });
  };

  // eslint-disable-next-line no-unused-vars
  const handlePublishPost = () => {
    const postData = new FormData();
    // eslint-disable-next-line no-undef
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
        <div className="user-info">
          <img
            className="avatar-post"
            src={`http://localhost:5200/avatar/${userAvatar}`}
            alt="Avatar"
          />

          <textarea
            placeholder="Commencer un post"
            onClick={handleTextAreaClick}
          />
        </div>
        <div className="media-buttons">
          <label>
            <input type="file" accept="image/*" name="picture" />
            <span>
              {" "}
              <img className="image-button" src={photoIcon} alt="add-button" />
              Photo / Vidéo
            </span>
          </label>
          <label>
            <input type="file" accept="application/pdf" name="pdf" />
            <span>
              <img className="pdf-button" src={pdfIcon} alt="Pdf-button" />
              PDF
            </span>
          </label>
          <label>
            <input type="file" accept="image/*, video/*" name="gif" />
            <span>
              <img className="gif-button" src={gifIcon} alt="Gif-button" />
              GIF
            </span>
          </label>
          <label>
            <input type="file" accept="image/*, video/*" name="event" />
            <span>
              <img
                className="calendar-button"
                src={eventIcon}
                alt="Calendar-button"
              />
              Événement
            </span>
          </label>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          className="modal"
        >
          <div className="modal-content">
            <div className="user-modal-info">
              <img
                className="modal-avatar-post"
                src={`http://localhost:5200/avatar/${userAvatar}`}
                alt="Avatar"
              />{" "}
              <span className="modal-user-name">
                {`${userInfos.firstname}`}{" "}
                <span className="uppercase"> {`${userInfos.lastname}`}</span>
              </span>
            </div>
            <textarea placeholder="Commencer un post" />
            <div className="media-buttons-modal">
              {" "}
              <label>
                <input type="file" accept="image/*" name="picture" />
                <span>
                  {" "}
                  <img
                    className="image-button"
                    src={photoIcon}
                    alt="add-button"
                  />
                  Photo / Vidéo
                </span>
              </label>
              <label>
                <input type="file" accept="application/pdf" name="pdf" />
                <span>
                  <img className="pdf-button" src={pdfIcon} alt="Pdf-button" />
                  PDF
                </span>
              </label>
              <label>
                <input type="file" accept="image/*, video/*" name="gif" />
                <span>
                  <img className="gif-button" src={gifIcon} alt="Gif-button" />
                  GIF
                </span>
              </label>
              <label>
                <input type="file" accept="image/*, video/*" name="event" />
                <span>
                  <img
                    className="calendar-button"
                    src={eventIcon}
                    alt="Calendar-button"
                  />
                  Événement
                </span>
              </label>
            </div>
            <div className="post-modal-buttons">
              <button type="button" onClick={handleCloseModal}>
                Fermer
              </button>
              <button type="submit" onClick={handlePublishPost}>
                Publier
              </button>
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default Post;
