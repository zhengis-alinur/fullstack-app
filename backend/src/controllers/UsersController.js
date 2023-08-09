const User = require("../models/UserModel");

module.exports.GetUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            users,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
