const model = require("../models");

const login = async (req, res) => {
  model.user
    .findUser(req.body)
    .then(([[user]]) => {
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }
      return res.status(200).json({ user });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { login };
