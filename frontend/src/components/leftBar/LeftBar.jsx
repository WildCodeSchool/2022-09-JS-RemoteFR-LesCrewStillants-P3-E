import "./LeftBar.css";
import Groups from "@components/leftBar/Groups";
import Activity from "@components/leftBar/Activity";

function LeftBar() {
  return (
    <div className="leftBar">
      <Groups />
      <Activity />
    </div>
  );
}

export default LeftBar;
