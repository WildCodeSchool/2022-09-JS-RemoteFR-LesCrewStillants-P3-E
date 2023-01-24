const express = require("express");

const router = express.Router();

const PublicationControllers = require("../controllers/PublicationControllers");

router.post("/create", PublicationControllers.create);
router.get("/browse", PublicationControllers.browse);
router.put("/destroy/:id", PublicationControllers.destroy);

module.exports = router;
