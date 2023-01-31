const express = require("express");

const router = express.Router();

const PublicationControllers = require("../controllers/PublicationControllers");

router.post("/posts/create", PublicationControllers.create);
router.get("/posts/browse", PublicationControllers.browse);
router.put("/posts/destroy/:id", PublicationControllers.destroy);

module.exports = router;
