const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");
const userControllers = require("../controllers/userControllers");
const teamControllers = require("../controllers/teamControllers");
const roleControllers = require("../controllers/roleControllers");
const postControllers = require("../controllers/postControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

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

// Posts routes

router.get("/posts", postControllers.browse);
router.get("/posts/:id", postControllers.read);
router.post("/posts", postControllers.add);
router.put("/posts/:id", postControllers.edit);
router.patch("/posts/:id", postControllers.edit);
router.delete("/posts/:id", postControllers.destroy);

module.exports = router;
