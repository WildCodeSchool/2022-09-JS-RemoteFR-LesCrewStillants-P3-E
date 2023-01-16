import React, { useState } from "react";
import "../assets/css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import loginLogo from "../assets/images/login-logo.jpg";
import loginLogo2 from "../assets/images/login-logo2.jpg";
import loginExemple from "../assets/images/login-exemple.jpg";

export default function Login() {
  const [email, setEmail] = useState("");

  const changeEmail = (e) => {
    if (
      (/^[0-9a-zA-Z@_-\w.]+$/.test(e.target.value) &&
        e.target.value.length <= 50) ||
      !e.target.value
    ) {
      setEmail(e.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <main className="login">
      <section className="login-left">
        <div className="login-content">
          <img alt="Noticia logo" src={loginLogo} />
          <h1>Bienvenue dans la nouvelle communication</h1>
          <p>
            Votre outils pour une meilleure communication en interne nous avons
            mis en place pour vous cette solution efficace et intuitive.
          </p>
          <img alt="dashboard exemple" src={loginExemple} />
          <button type="button">Connectez-vous</button>
        </div>
      </section>

      <section id="login-right" className="login-right">
        <div className="login-content">
          <img alt="Enedis Logo" src={loginLogo2} />
          <h1>Connexion</h1>

          <form onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={changeEmail}
              type="email"
              placeholder="Adresse Email"
            />
            <input type="password" placeholder="Mot de passe" />
            <input type="checkbox" /> Rester connecté
            <button type="button">
              <FontAwesomeIcon icon={faArrowRightToBracket} /> Connexion
            </button>
            <span className="login-forget">Mot de passe oublié</span>
          </form>
        </div>
      </section>
    </main>
  );
}
