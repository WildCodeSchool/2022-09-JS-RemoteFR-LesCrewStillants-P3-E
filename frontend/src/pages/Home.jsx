// import { useState } from "react";
import PostBody from "../components/postbody/PostBody";
import Header from "../components/header/Header";
import Comments from "../components/postbody/comments/Comments";
import "../components/postbody/maison.css";

export default function Home() {
  // const [posts, setposts] = useState([]);
  return (
    <div>
      <Header />
      <div className="body">
        <div className="left">
          <h1>divd,cn</h1>
        </div>
        <div className="middle">
          {/* {posts.map((post) => (
            <PostBody />
          ))} */}
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
            {" "}
            <Comments currentUserId="1" />
          </div>
        </div>
        <div className="right">
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}
