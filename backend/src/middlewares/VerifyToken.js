const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const { getToken } = require("../util/getToken");

module.exports = async (req, res, next) => {
    try {
        const token = getToken(req);
        if (!token) {
            return res.status(401).json({ message: "Authentication failed!" });
        }

        const verified = jwt.verify(token, process.env.TOKEN_KEY);
        const user = await User.findById(verified.id);

        if (!user) {
            return res.status(401).json({
                message: "User is deleted or jwt-token is expired!",
            });
        }

        if (!user.status) {
            return res.status(403).json({ message: "User account is blocked" });
        }
        next();
    } catch (err) {
        return res
            .status(401)
            .json({ message: "Invalid token or token is expired!" });
    }
};
