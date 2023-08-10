const { Signup, Login, Logout } = require("../controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.delete("/logout", Logout);

module.exports = router;
