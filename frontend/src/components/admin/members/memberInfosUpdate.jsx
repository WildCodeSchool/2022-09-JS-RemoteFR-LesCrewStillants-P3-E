export default function MemberInfosUpdate() {
  return (
    <div className="card">
      <div className="card-header">Détails du profile</div>
      <div className="card-body">
        <form className="formResponsive">
          <table>
            <tr>
              <td className="font-bold">
                Full Name <span className="text-red-500">*</span>
              </td>
              <td>
                <div>
                  <input className="w-1/2" type="text" placeholder="Nom" />
                  <input className="w-1/2" type="text" placeholder="Prénom" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="font-bold">
                Adress <span className="text-red-500">*</span>
              </td>
              <td>
                <input className="w-full" type="text" placeholder="Address" />
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
          <button
            className="bg-sky-400 text-base px-3 py-2 rounded text-white shadow-lg  shadow-sky-400/50"
            type="submit"
          >
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
}
