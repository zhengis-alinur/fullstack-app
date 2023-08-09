const { Status, Delete } = require("../controllers/UserController");
const verification = require("../middlewares/VerifyToken");
const router = require("express").Router();

router.use(verification);

router.put("/status", Status);
router.delete("/delete", Delete);

module.exports = router;