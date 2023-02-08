const bcrypt = require("bcrypt");
const { generateToken } = require("../../helper/jwt");
const model = require("../models");

const register = async (req, res) => {
  const saltRounds = await bcrypt.genSalt(10);
  const passHash = await bcrypt.hash(req.body.password, saltRounds);
  const user = {
    ...req.body,
    password: passHash,
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

const login = async (req, res) => {
  try {
    const { mail, password } = req.body;
    const [[user]] = await model.user.findMail(mail);

    if (![user]) {
      return res.status(403).json({ error: "User not Found" });
    }

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      return res.status(403).json({ error: "password incorect" });
    }
    const token = generateToken({ id: user.id, mail: user.mail });
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
  }
  return null;
};

module.exports = { login, register };
