const router = require("express").Router();

const gitarcontroller = require("../controllers/gitarcontroller");

router.get("/", gitarcontroller.viewGitar);
router.post("/", gitarcontroller.addGitar);
router.put("/", gitarcontroller.editGitar);

module.exports = router;
