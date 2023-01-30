import "./Profile.css";
import React from "react";
import Header from "@components/header/Header";
import LeftBar from "@components/leftBar/LeftBar";
import Post from "@components/postComponent/Post";
import Rightbar from "@components/rightBar/Rightbar";
import CardProfile from "@components/profile/CardProfile/CardProfile";
import PostBody from "@components/postbody/PostBody";

function ProfileFake() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="left">
          {" "}
          <LeftBar />
        </div>
        <div className="middle">
          <CardProfile />
          <div className="myPublications">
            <h2>Mes Publications</h2>
          </div>
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
        </div>
        <div className="right" />
        <Rightbar />
        <div className="container" />
      </div>
    </div>
  );
}

export default ProfileFake;
