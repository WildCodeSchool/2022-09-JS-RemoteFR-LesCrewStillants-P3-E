const model = require("../models");

const create = async (req, res) => {
  const publication = req.body;

  model.publication
    .create(publication)
    .then(() => {
      res.status(201).json({ success: "Publication created" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browse = async (req, res) => {
  model.publication
    .findAllWithUser()
    .then(([rows]) => {
      console.warn(rows);
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  model.publication
    .findById(req.params.id)
    .then(([rows]) => {
      console.warn(rows);
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

const destroy = async (req, res) => {
  model.publication
    .deletePublication(req.params.id)
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

module.exports = { create, browse, destroy, read };
