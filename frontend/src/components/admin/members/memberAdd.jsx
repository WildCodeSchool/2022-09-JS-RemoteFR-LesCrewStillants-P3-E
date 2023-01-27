import { useState } from "react";
import axios from "axios";

export default function MemberAdd({
  hundleClickAddMember,
  memberList,
  setMemberList,
}) {
  const [isMemberPost, setIsMemberPost] = useState(false);

  const handleSubmitAddMember = (e) => {
    e.preventDefault();
    setIsMemberPost(true);
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/users`,
        JSON.stringify({
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          address: e.target.address.value,
          mail: e.target.mail.value,
          phone: e.target.phone.value,
        }),
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        }
      )
      .then(
        (response) => {
          console.warn(response);
          setMemberList([
            {
              firstname: e.target.firstname.value,
              lastname: e.target.lastname.value,
              mail: e.target.mail.value,
              phone: e.target.phone.value,
            },
            ...memberList,
          ]);
          hundleClickAddMember();
          setIsMemberPost(false);
        },
        (error) => {
          console.error(error);
        }
      );
  };
  return (
    <div className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div
          className={`${
            isMemberPost ? "addUserContent" : null
          } border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
        >
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-xl font-semibold">Add a new member</h3>
          </div>
          {/* body */}
          <form onSubmit={handleSubmitAddMember}>
            <div className="relative p-6 flex-auto">
              <div className="formResponsive">
                <table>
                  <tr>
                    <td className="font-bold">
                      Full Name <span className="text-red-500">*</span>
                    </td>
                    <td>
                      <div>
                        <input
                          required="required"
                          id="lastname"
                          className="w-1/2"
                          name="lastname"
                          type="text"
                          placeholder="Nom"
                        />
                        <input
                          required="required"
                          className="w-1/2"
                          type="text"
                          placeholder="Prénom"
                          name="firstname"
                          id="firstname"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      Adress <span className="text-red-500">*</span>
                    </td>
                    <td>
                      <input
                        className="w-full"
                        type="text"
                        placeholder="Address"
                        name="address"
                        id="address"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      Email <span className="text-red-500">*</span>
                    </td>
                    <td>
                      <input
                        required="required"
                        className="w-full"
                        name="mail"
                        id="mail"
                        type="text"
                        placeholder="Email"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">Phone</td>
                    <td>
                      <input
                        className="w-full"
                        name="phone"
                        id="phone"
                        type="text"
                        placeholder="phone"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            {/* footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => hundleClickAddMember()}
              >
                Close
              </button>
              <button
                className="bg-sky-400 text-base px-3 py-2 rounded text-white shadow-lg  shadow-sky-400/50"
                type="submit"
              >
                Add this member
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
