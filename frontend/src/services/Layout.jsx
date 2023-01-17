import Navbar from "@components/navbar/Navbar";
import LeftBar from "@components/leftBar/LeftBar";
import { Outlet } from "react-router-dom";
import RightBar from "@components/rightBar/Rightbar";

function Layout() {
  return (
    <span>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </span>
  );
}

export default Layout;
