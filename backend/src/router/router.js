const express = require("express");

const fs = require("fs");

const multer = require("multer");

// eslint-disable-next-line import/no-unresolved
const { v4: uuidv4 } = require("uuid");

const upload = multer({ dest: "uploads/" });

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");
const userControllers = require("../controllers/userControllers");
const teamControllers = require("../controllers/teamControllers");
const roleControllers = require("../controllers/roleControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);
router.post("/avatar", upload.single("avatar"), (req, res) => {
  const { originalname } = req.file;
  const { filename } = req.file;
  fs.rename(
    `uploads/${filename}`,
    `uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});

// Users routes

router.get("/users/", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", userControllers.add);
router.put("/users/:id", userControllers.edit);
router.patch("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

// Teams routes

router.get("/teams/", teamControllers.browse);
router.get("/teams/:id", teamControllers.read);
router.post("/teams", teamControllers.add);
router.put("/teams/:id", teamControllers.edit);
router.patch("/teams/:id", teamControllers.edit);
router.delete("/teams/:id", teamControllers.destroy);

// Roles routes

router.get("/roles/", roleControllers.browse);
router.post("/roles", roleControllers.add);
router.put("/roles/:id", roleControllers.edit);
router.patch("/roles/:id", roleControllers.edit);
router.delete("/roles/:id", roleControllers.destroy);

module.exports = router;
