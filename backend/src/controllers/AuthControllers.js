const bcrypt = require("bcrypt");
const { generateToken } = require("../../helper/jwt");
const model = require("../models");

const register = async (req, res) => {
  const user = {
    ...req.body,
    password: await bcrypt.hash(req.body.password, 10),
  };
  model.user
    .add(user)
    .then(() => {
      res.status(201).json({ success: "User save" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = (req, res) => {
  model.user
    .findUser(req.body)
    .then(([[user]]) => {
      if (!user) {
        return res.status(403).json({ error: "User not Found" });
      }
      const compare = bcrypt.compareSync(req.body.password, user.password);
      if (!compare) {
        return res.status(403).json({ error: "password incorect" });
      }
      const token = generateToken({ id: user.id, mail: user.mail });
      return res.status(200).json({ token });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { login, register };
