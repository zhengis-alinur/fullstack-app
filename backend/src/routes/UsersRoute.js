const { GetUsers } = require("../controllers/UsersController");
const verification = require("../middlewares/VerifyToken");
const router = require("express").Router();

router.use(verification);
router.get("/", GetUsers);

module.exports = router;
