import LeftBar from "@components/leftBar/LeftBar";
import RightBar from "@components/rightBar/Rightbar";
import "./Home.css";
import Header from "@components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}
