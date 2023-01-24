export default function MemberSigninMethodUpdate() {
  return (
    <div className="card">
      <div className="card-header">Sign-in Method</div>
      <div className="card-body">
        <div className="flex justify-between border-dotted border-b-2 py-5 px-2">
          <div>
            <div className="font-bold">Email Address</div>
            <div className="font-light">anthony.gorski@mail.com</div>
          </div>
          <div>
            <button
              className="bg-neutral-200 text-base px-3 py-2 rounded text-neutral-500 shadow-lg shadow-neutral-500/50"
              type="submit"
            >
              Change Email
            </button>
          </div>
        </div>
        <div className="flex justify-between py-5 px-2">
          <div>
            <div className="font-bold">Password</div>
            <div className="font-light">**********</div>
          </div>
          <div>
            <button
              className="bg-neutral-200 text-base px-3 py-2 rounded text-neutral-500 shadow-lg  shadow-neutral-500/50"
              type="submit"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
