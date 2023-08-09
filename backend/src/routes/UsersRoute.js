const { GetUsers } = require("../controllers/UsersController");
const router = require("express").Router();

router.get("/", GetUsers);

module.exports = router;
