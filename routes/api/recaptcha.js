const router = require("express").Router();
const postsController = require("../../controllers/postsController");

router.route("/").post(postsController.validateToken);

module.exports = router;
