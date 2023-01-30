import { useParams } from "react-router-dom";
import "../assets/css/login.css";
import LoginForm from "@components/login/LoginForm";
import LoginPasswordRegister from "@components/login/LoginPasswordRegister";
import loginLogo from "../assets/images/login-logo.jpg";
import loginLogo2 from "../assets/images/login-logo2.jpg";
import loginExemple from "../assets/images/login-exemple.jpg";

export default function Login() {
  const { registerkey } = useParams();
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
          {registerkey ? (
            <LoginPasswordRegister registerkey={registerkey} />
          ) : (
            <LoginForm />
          )}
        </div>
      </section>
    </main>
  );
}
