import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@assets/css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function LoginPasswordRegister({ registerkey }) {
  const [userInfos, setUserInfos] = useState([]);
  const [passwordResgister, setPasswordRegister] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleSubmitRegisterPassword = (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.passwordconfirm.value) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
      axios
        .post(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/usersregisterpassword/${registerkey}`,
          JSON.stringify({
            password: e.target.password.value,
            passwordconfirm: e.target.passwordconfirm.value,
          }),
          {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json",
            },
          }
        )
        .then(
          (response) => {
            console.warn(response);
            if (response.status === 204) {
              setPasswordRegister(true);
            }
          },
          (error) => {
            console.error(error);
          }
        );
    }
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/usersregister/${registerkey}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfos(data);
      })
      .catch((e) => console.error(e));
  }, []);
  console.warn(userInfos);
  return (
    <>
      <p />
      {userInfos.id ? (
        <>
          <h1>Finalisez votre inscription</h1>
          <p className="bg-sky-100 mt-7 p-4 rounded-xl">
            Bienvenue sur Notitia{" "}
            <span className="font-bold">{userInfos.firstname}</span>
            <br />
            Pour finaliser l'activation de votre compte, veuillez choisir un mot
            de passe
          </p>
          {passwordResgister ? (
            <>
              <p className="bg-green-100 mt-7 p-4 rounded-xl">
                Félicitation, votre mot de passe à bien été enregistrer. Vous
                pouvez à présent vous connecter
              </p>
              <Link
                to="/login"
                className="block bg-green-100 pointer: p-3 rounded mt-5"
              >
                <FontAwesomeIcon icon={faArrowRightToBracket} /> Connexion
              </Link>
            </>
          ) : null}
          {errorPassword ? (
            <p className="bg-red-100 mt-7 p-4 rounded-xl">
              Les mots de passes ne correspondent pas!
            </p>
          ) : null}

          {!passwordResgister ? (
            <form onSubmit={handleSubmitRegisterPassword}>
              <input type="password" id="password" placeholder="Mot de passe" />
              <input
                type="password"
                id="passwordconfirm"
                placeholder="Confirmation"
              />
              <button type="submit">
                <FontAwesomeIcon icon={faArrowRightToBracket} /> Valider
              </button>
            </form>
          ) : null}
        </>
      ) : (
        <>
          <p className="bg-red-100 mt-7 p-4 rounded-xl">
            Ce lien est inactif car le compte ciblé est inexistant ou déjà
            finalisé
          </p>
          <Link
            to="/login"
            className="block bg-green-100 pointer: p-3 rounded mt-5"
          >
            <FontAwesomeIcon icon={faArrowRightToBracket} /> Connexion
          </Link>
        </>
      )}
    </>
  );
}
