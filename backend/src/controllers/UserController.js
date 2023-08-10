const { isValidObjectId } = require("mongoose");
const User = require("../models/UserModel");

module.exports.Status = async (req, res, next) => {
    try {
        const { status, userIds } = req.body;

        userIds.forEach(async (id) => {
            if (!id | !isValidObjectId(id)) {
                return res.status(400).json({ error: "Missing user ID" });
            }

            await User.findByIdAndUpdate(id, { status }).catch((error) => {
                return res
                    .status(400)
                    .json({ error: "Failed to update status" });
            });
        });

        return res.status(200).json({
            message: "Status changed successfully",
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports.Delete = (req, res, next) => {
    try {
        const { userIds } = req.query;
        console.log(userIds);
        userIds.forEach(async (id) => {
            if (!id || !isValidObjectId(id)) {
                return res
                    .status(400)
                    .json({ error: "Missing user ID or not valid id" });
            }
            const deletedUser = await User.findByIdAndDelete(id).catch(
                (error) => {
                    console.error(error);
                    return res
                        .status(400)
                        .json({ error: "Failed to delete user" });
                }
            );

            if (!deletedUser) {
                return res.status(404).json({ error: "User not found" });
            }
        });

        return res.status(200).json({
            message: "User deleted successfully",
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
