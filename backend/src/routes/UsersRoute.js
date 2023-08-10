const { GetUsers, Status, Delete } = require("../controllers/UsersController");
const verification = require("../middlewares/VerifyToken");
const router = require("express").Router();

router.use(verification);
router.get("/", GetUsers);
router.post("/", Status);
router.delete("/", Delete);

module.exports = router;
