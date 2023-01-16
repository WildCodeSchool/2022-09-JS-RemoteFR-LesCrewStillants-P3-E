const bcrypt = require("bcrypt");
const model = require("../models");

const register = (req, res) => {
  const { firstname, lastname, mail, password } = req.body;

  const salt = bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);

  const [[userExist]] = model.user.findUser(req.body);

  if (userExist) {
    return res.status(403).json({ error: "user exist" });
  }

  const user = {
    firstname,
    lastname,
    mail,
    password: hash,
  };

  model.user
    .add(user)
    .then(([result]) => {
      if (result.affectedRows === 1) {
        return res.status(201).json({ success: "Utilisateur ajouté" });
      }
      return res.sendStatus(401);
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(500);
    });

  // TODO: comprendre pourquoi ça ne fonctionne pas sans ça 🧐
  return false;
};

const login = async (req, res) => {
  model.user
    .findUser(req.body)
    .then(([[user]]) => {
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }
      const correctPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!correctPassword) {
        return res.status(403).json({ error: "wrong password" });
      }
      return res.status(200).json({ user });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { login, register };
