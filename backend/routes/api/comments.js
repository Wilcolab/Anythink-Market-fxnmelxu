/**
 * @description This file contains the API routes for comments.
 */

/**
 * Express router for comments.
 * @type {object}
 * @namespace router
 * @memberof module:routes/api/comments
 */

/**
 * Create a new comment.
 * @name POST /
 * @function
 * @memberof module:routes/api/comments
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} The created comment.
 */

/**
 * Get all comments.
 * @name GET /
 * @function
 * @memberof module:routes/api/comments
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object[]} An array of comments.
 */

/**
 * Delete a comment by ID.
 * @name DELETE /:id
 * @function
 * @memberof module:routes/api/comments
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} A success message.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Create a new comment
router.post("/", async (req, res) => {
    const comment = new Comment(req.body);
    await comment.save();
    res.json(comment);
});

// Get all comments
router.get("/", async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
});

// Delete a comment by ID
router.delete("/:id", async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});
