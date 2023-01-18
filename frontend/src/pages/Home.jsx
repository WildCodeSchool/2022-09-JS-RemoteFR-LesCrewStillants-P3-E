import LeftBar from "@components/leftBar/LeftBar";
import RightBar from "@components/rightBar/Rightbar";
import "./Home.css";
import Navbar from "@components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
        <div className="container">
      <LeftBar />
        <RightBar />
        </div>
    </div>
  );
}
