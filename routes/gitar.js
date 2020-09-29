const router = require("express").Router();

const gitarcontroller = require("../controllers/gitarcontroller");

router.get("/", gitarcontroller.viewGitar);
router.get("/", gitarcontroller.addGitar);

module.exports = router;
