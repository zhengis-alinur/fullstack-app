const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

const Signup = async (req, res) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const user = await User.create({
            email,
            password,
            username,
            createdAt,
        });

        const token = createSecretToken(user._id);
        res.status(201).json({
            message: "User signed up successfully",
            user,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Both email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res
                .status(401)
                .json({ message: "Incorrect email or password" });
        }
        if (!user.status) {
            return res.status(403).json({ message: "User is blocked" });
        }

        await User.updateOne({ email }, { lastLogin: new Date() });
        const token = createSecretToken(user._id);
        res.status(200).json({
            message: "User logged in successfully",
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const Logout = async (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                res.status(400).send("Unable to log out");
            } else {
                res.send("Logout successful");
            }
        });
    } else {
        res.end();
    }
};

module.exports = {
    Signup,
    Login,
    Logout,
};
