import "../leftBar/ItemBar.css";
import Directory from "@components/rightBar/Directory";
import Birthday from "@components/rightBar/Birthday";

function RightBar() {
  return (
    <div className="RightBar">
      <Directory />
      <Birthday />
    </div>
  );
}

export default RightBar;
