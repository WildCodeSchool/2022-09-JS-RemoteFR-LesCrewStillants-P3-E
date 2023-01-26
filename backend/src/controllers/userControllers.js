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
    .find(req.params.id)
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
const edit = (req, res) => {
  const user = req.body;

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
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
  add,
  destroy,
};
