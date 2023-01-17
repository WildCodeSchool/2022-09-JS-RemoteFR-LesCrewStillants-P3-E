export default function MemberAdd({ hundleClickAddMember }) {
  return (
    <div className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-xl font-semibold">Add a new member</h3>
          </div>
          {/* body */}
          <div className="relative p-6 flex-auto">
            <form className="formResponsive">
              <table>
                <tr>
                  <td className="font-bold">
                    Full Name <span className="text-red-500">*</span>
                  </td>
                  <td>
                    <div>
                      <input className="w-1/2" type="text" placeholder="Nom" />
                      <input
                        className="w-1/2"
                        type="text"
                        placeholder="Prénom"
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
                      ype="text"
                      placeholder="Address"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">
                    Email <span className="text-red-500">*</span>
                  </td>
                  <td>
                    <input className="w-full" type="text" placeholder="Email" />
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Phone</td>
                  <td>
                    <input className="w-full" type="text" placeholder="phone" />
                  </td>
                </tr>
              </table>
            </form>
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
        </div>
      </div>
    </div>
  );
}
