const router = require("express").Router();
const mongoose = require("mongoose");

/**
 * Express router for handling comments.
 * @module routes/api/comments
 */

const Comment = mongoose.model("Comment");

module.exports = router;

/**
 * GET /api/comments
 * Retrieves all comments.
 * @name GET /api/comments
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the retrieved comments.
 */
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

/**
 * DELETE /api/comments/:id
 * Deletes a comment by its ID.
 * @name DELETE /api/comments/:id
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the deletion.
 */
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.json({ message: "Comment deleted" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
