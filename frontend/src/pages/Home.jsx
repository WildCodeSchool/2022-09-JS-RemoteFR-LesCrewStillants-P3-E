import React from "react";
import RightBar from "../components/rightBar/Rightbar";
import LeftBar from "../components/leftBar/LeftBar";
import PostBody from "../components/postbody/PostBody";
import Header from "../components/header/Header";
import Comments from "../components/postbody/comments/Comments";
import "../components/postbody/maison.css";
import "./Home.css";
import Post from "../components/postComponent/Post";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="left">
          {" "}
          <LeftBar />
        </div>
        <div className="middle">
          <Post />
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
          <RightBar />
        </div>
        <div className="container" />
      </div>
    </div>
  );
}
