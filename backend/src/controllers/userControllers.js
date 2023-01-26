const fs = require("fs");
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

const add = (req, res) => {
  const user = req.body;
  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      // eslint-disable-next-line global-require
      const mailer = require("../../helper/mailer");
      const templateFile = fs
        .readFileSync("./src/template/emailRegisterTemplate.html")
        .toString()
        .replace("%name%", `${user.firstname} ${user.lastname}`);
      mailer.sendMail(
        {
          from: "notitia@musicwizz.fr",
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
  edit,
  editAvatar,
  add,
  destroy,
};
