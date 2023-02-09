import { useRef } from "react";
import axios from "axios";

export default function ChangeAvatar({ handleCluck, token }) {
  const refContainer = useRef("");
  const hSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("avatar", refContainer.current.files[0]);
    formData.append("userId", token.id);

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/avatar`, formData);

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/users/avatar/${token.id}`, {
        avatar: `${token.id}-${refContainer.current.files[0].name}`,
      })
      .catch((err) => console.warn(err));
  };
  return (
    <div className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <p>Change ta photo de profil</p>
          <form encType="multipart/form-data" onSubmit={hSubmit}>
            <input
              type="file"
              name="monfichier"
              className="file"
              ref={refContainer}
            />
            <button type="submit" className="sendbtn">
              Valider
            </button>
          </form>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="flex text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => handleCluck()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
