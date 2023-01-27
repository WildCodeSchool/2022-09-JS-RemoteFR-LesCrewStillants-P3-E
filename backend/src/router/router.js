const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const DEST = path.join(__dirname, "..", "..", "public", "avatar");
const uploadAvatar = multer({ dest: DEST });

const itemControllers = require("../controllers/itemControllers");
const userControllers = require("../controllers/userControllers");
const teamControllers = require("../controllers/teamControllers");
const roleControllers = require("../controllers/roleControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);
router.post("/avatar", uploadAvatar.single("avatar"), (req, res) => {
  const { userId } = req.body;
  const { originalname } = req.file;
  const { filename } = req.file;

  fs.rename(
    `public/avatar/${filename}`,
    `public/avatar/${userId}-${originalname}`,
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
router.put("/users/avatar/:id", userControllers.editAvatar);
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
