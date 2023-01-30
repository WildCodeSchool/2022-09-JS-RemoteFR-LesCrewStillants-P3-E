import { useState } from "react";
import "@assets/css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import instanceAxios from "../../services/axios";

export default function LoginForm() {
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
    const mail = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    instanceAxios
      .post(`/auth/login`, {
        mail,
        password,
      })
      .then((res) => {
        console.warn(res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.warn(err));
  };
  return (
    <>
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
        <button type="submit">
          <FontAwesomeIcon icon={faArrowRightToBracket} /> Connexion
        </button>
        <span className="login-forget">Mot de passe oublié</span>
      </form>
    </>
  );
}
