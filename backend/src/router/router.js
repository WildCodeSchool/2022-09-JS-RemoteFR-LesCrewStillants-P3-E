const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");
const userControllers = require("../controllers/userControllers");
const teamControllers = require("../controllers/teamControllers");

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

// Groups routes

router.get("/teams/", teamControllers.browse);
router.get("/teams/:id", teamControllers.read);
router.post("/teams", teamControllers.add);
router.put("/teams/:id", teamControllers.edit);
router.patch("/teams/:id", teamControllers.edit);
router.delete("/teams/:id", teamControllers.destroy);

module.exports = router;
