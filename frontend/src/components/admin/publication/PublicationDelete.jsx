import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import axios from "axios";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function PublicationDelete({
  handleClickShowModalPublicationDelete,
}) {
  const { id } = useParams();

  const handleClickPublicationDelete = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/publication/${id}`).then(
      (response) => {
        console.warn(response);
      },
      (error) => {
        console.error(error);
      }
    );
  };
  return (
    <div className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-xl font-semibold">Supprimer la publication</h3>
          </div>
          <div className="p-10 font-bold">
            <p>Voulez-vous vraiment supprimer cette publication ?</p>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => handleClickShowModalPublicationDelete()}
            >
              Close
            </button>
            <button
              className="bg-red-500 text-base px-3 py-2 rounded text-white shadow-lg  shadow-sky-400/50"
              type="submit"
              onClick={handleClickPublicationDelete}
            >
              <FontAwesomeIcon icon={faTrash} /> Supprimer la publication
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
