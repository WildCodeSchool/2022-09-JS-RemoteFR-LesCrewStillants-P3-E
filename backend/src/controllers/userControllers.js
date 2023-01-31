const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const models = require("../models");

const browse = (req, res) => {
  models.user
    .getAllUsers()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .findUser(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readregisterkey = (req, res) => {
  models.user
    .findUserByRegisterKey(req.params.registerkey)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const [[infoUser]] = await models.user.findUser(id);

  const user = {
    ...req.body,
    avatar: infoUser.avatar,
    id,
  };

  const [updateUser] = await models.user.update(user);

  if (updateUser.affectedRows === 0) {
    res.sendStatus(500);
  } else {
    res.sendStatus(204);
  }
};

const editAvatar = async (req, res) => {
  const { avatar } = req.body;

  const id = parseInt(req.params.id, 10);

  const [[userInfo]] = await models.user.findUser(id);

  const user = {
    ...userInfo,
    id,
    avatar,
  };

  const [updateUser] = await models.user.update(user);

  if (updateUser.affectedRows === 0) {
    res.sendStatus(500);
  } else {
    res.sendStatus(204);
  }
};

const readregisterpassword = async (req, res) => {
  const { password, passwordconfirm } = req.body;

  if (password === passwordconfirm) {
    const saltRounds = await bcrypt.genSalt(10);
    const passHash = await bcrypt.hash(password, saltRounds);

    const [[userInfo]] = await models.user.findUserByRegisterKey(
      req.params.registerkey
    );
    const { id } = userInfo;

    const user = {
      id,
      passHash,
    };

    const [updateUser] = await models.user.createPassword(user);

    if (updateUser.affectedRows === 0) {
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  } else {
    res.sendStatus(500);
  }
};

const add = (req, res) => {
  const registerKey = uuidv4();
  const user = req.body;
  // TODO validations (length, format...)

  models.user
    .add(user, registerKey)
    .then(([result]) => {
      // eslint-disable-next-line global-require
      const mailer = require("../../helper/mailer");
      const templateFile = fs
        .readFileSync("./src/template/emailRegisterTemplate.html")
        .toString()
        .replace("%name%", `${user.firstname} ${user.lastname}`)
        .replace(
          "%url_register%",
          `${process.env.FRONTEND_URL}/login/${registerKey}`
        );
      mailer.sendMail(
        {
          from: process.env.SMTP_EXP_MAIL,
          to: user.mail,
          subject: "Bienvenue sur Notitia",
          text: "Hello world",
          html: templateFile,
        },
        (err) => {
          if (err) console.error(err);
        }
      );
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  readregisterkey,
  readregisterpassword,
  edit,
  editAvatar,
  add,
  destroy,
};
