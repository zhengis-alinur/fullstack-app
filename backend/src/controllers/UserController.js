const User = require("../models/UserModel");

module.exports.Status = async (req, res, next) => {
    try {
        const { status, id } = req.query;

        if (!id) {
            return res.status(400).json({ error: "Missing user ID" });
        }

        await User.findByIdAndUpdate(id, { status }).catch((error) => {
            console.error(error);
            return res.status(400).json({ error: "Failed to update status" });
        });

        res.status(200).json({
            message: "Status changed successfully",
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports.Delete = async (req, res, next) => {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ error: "Missing user ID" });
        }

        const deletedUser = await User.findByIdAndDelete(id).catch((error) => {
            console.error(error);
            return res.status(400).json({ error: "Failed to delete user" });
        });

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
