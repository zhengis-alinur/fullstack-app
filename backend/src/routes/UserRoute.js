const { Status, Delete } = require("../controllers/UserController");
const verification = require("../middlewares/VerifyToken");
const router = require("express").Router();

router.use(verification);

router.post("/status", Status);
router.delete("/delete", Delete);

module.exports = router;
