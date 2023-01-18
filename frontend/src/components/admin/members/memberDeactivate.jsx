import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function MemberDeactivate() {
  return (
    <div className="card">
      <div className="card-header">Deactivate Account</div>
      <div className="card-body">
        <div className="border-dotted border-amber-200 border-2 flex p-4 bg-amber-100 rounded">
          <div className="px-3  text-yellow-500 text-3xl">
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <div>
            <div className="font-bold">
              This account has been deactivated by Christine LEROY the
              02/12/2022
            </div>
            <div className="font-light">
              This user can no longer log in and use this tool
            </div>
          </div>
        </div>

        <div className="mt-5">
          <input className="" type="checkbox" /> I confirm this account
          deactivation
        </div>

        <div className="w-100 flex justify-end">
          <button
            className="bg-green-500 text-base px-3 py-2 rounded text-white font-medium shadow-lg  shadow-green-500/50"
            type="submit"
          >
            Reactivate account
          </button>
        </div>
      </div>
    </div>
  );
}
