import PostBody from "../components/postbody/PostBody";
import Header from "../components/header/Header";
import Comments from "../components/postbody/comments/Comments";
import "../components/postbody/maison.css";
import LeftBar from "@components/leftBar/LeftBar";
import RightBar from "@components/rightBar/Rightbar";
import "./Home.css";



export default function Home() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="left">
          <h1>divd,cn</h1>
        </div>
        <div className="middle">
          <PostBody
            name="Elie Partenay"
            description="directeur admin"
            message="Le fichier de prévention pour l’année 2023 est sorti. Il est nécessaire
        que celui-ci soit à jour pour permettre une meilleure réactivité lors
        d’un incident. Je compte sur vous pour vérifier et modifier les
        informations si nécessaire"
            date="6h"
          />
          <PostBody
            name="Elie Partenay"
            description="directeur admin"
            message="Le fichier de prévention pour l’année 2023 est sorti. Il est nécessaire
        que celui-ci soit à jour pour permettre une meilleure réactivité lors
        d’un incident. Je compte sur vous pour vérifier et modifier les
        informations si nécessaire"
            date="6h"
          />
          <div>
            <Comments currentUserId="1" />
          </div>
        </div>
        <div className="right">
          <h1>hello</h1>
        </div>
        <div className="container">
          <LeftBar />
          <RightBar />
        </div>
      </div>
    </div>
  );
}