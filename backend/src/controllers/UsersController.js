const { isValidObjectId } = require("mongoose");
const User = require("../models/UserModel");

module.exports.GetUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            users,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.Status = async (req, res, next) => {
    try {
        const { status, userIds } = req.body;

        userIds.forEach(async (id) => {
            if (!id | !isValidObjectId(id)) {
                return res.status(400).json({ message: "Missing user ID" });
            }

            await User.findByIdAndUpdate(id, { status }).catch((error) => {
                return res
                    .status(400)
                    .json({ message: "Failed to update status" });
            });
        });

        return res.status(200).json({
            message: "Status changed successfully",
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.Delete = (req, res, next) => {
    try {
        const { userIds } = req.query;
        userIds.forEach(async (id) => {
            if (!id || !isValidObjectId(id)) {
                return res
                    .status(400)
                    .json({ message: "Missing user ID or not valid id" });
            }
            const deletedUser = await User.findByIdAndDelete(id).catch(
                (error) => {
                    console.error(error);
                    return res
                        .status(400)
                        .json({ message: "Failed to delete user" });
                }
            );

            if (!deletedUser) {
                return res.status(404).json({ message: "User not found" });
            }
        });

        return res.status(200).json({
            message: "User deleted successfully",
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
