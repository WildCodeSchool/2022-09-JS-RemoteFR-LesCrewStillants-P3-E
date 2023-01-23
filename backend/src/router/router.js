const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");
const userControllers = require("../controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// Users routes

router.get("/users/", userControllers.browse);
router.get("/users/:id", userControllers.find);
router.post("/users", userControllers.add);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

module.exports = router;
