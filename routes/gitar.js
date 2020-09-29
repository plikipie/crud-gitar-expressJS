const router = require("express").Router();

const gitarcontroller = require("../controllers/gitarcontroller");

router.get("/", gitarcontroller.viewGitar);
router.post("/", gitarcontroller.addGitar);

module.exports = router;
