import "../leftBar/ItemBar.css";
import Directory from "@components/rightBar/Directory";
import Birthday from "@components/rightBar/Birthday";

function RightBar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <div className="RightBar">
      <Directory />
      <Birthday />
      <div className="itemBar">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span onClick={logout} className="logOut">
          {" "}
          Se déconnecter
        </span>
      </div>
    </div>
  );
}

export default RightBar;
