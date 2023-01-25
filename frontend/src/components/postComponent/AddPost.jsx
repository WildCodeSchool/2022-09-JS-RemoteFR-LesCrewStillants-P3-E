import React from "react";
import "./postComponent.css";
import "./addPost.css";
import gifIcon from "../../assets/images/gif-icon.png";
import pdfIcon from "../../assets/images/pdf-icon.png";
import eventIcon from "../../assets/images/event-icon.png";
import photoIcon from "../../assets/images/photo-icon.png";
import avatarE from "../../assets/images/avatar-e.png";

export default function AddPost({ handleClickAddPost }) {
  return (
    <div className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <div className="user-info" />
            <img src={avatarE} alt="Avatar" />
            <div className="memberName">Lucky Luke</div>
          </div>
          {/* body */}
          <div className="relative p-6 flex-auto">
            <form className="formResponsive">
              <textarea placeholder="Commencer un post" />
              <div className="media-buttons-modal flex items-center ">
                <label>
                  <input type="file" accept="image/*" name="picture" />
                  <img
                    className="image-button"
                    src={photoIcon}
                    alt="add-button"
                  />
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
          {/* footer */}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-gray background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => handleClickAddPost()}
            >
              Close
            </button>
            <button
              className="bg-sky-400 text-base px-3 py-2 rounded text-white shadow-lg  shadow-sky-400/50"
              type="submit"
            >
              Publier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
