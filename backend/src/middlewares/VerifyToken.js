const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Authentication failed!" });
        }

        const verified = jwt.verify(token, process.env.TOKEN_KEY);
        const user = await User.findById(verified.id);

        if (!user) {
            return res.status(401).json({ error: "User not found!" });
        }

        if (!user.status) {
            return res.status(403).json({ error: "User account is inactive" });
        }

        req.user = verified;
        next();
    } catch (err) {
        return res.status(400).json({ error: "Invalid token!" });
    }
};
