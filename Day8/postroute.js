const express = require("express");
const router = express.Router();
const Post = require("./postDB");

router.post("/", async (req, res) => {
  try {
    const { userid, title, body } = req.body;
    if (!title || !body)
      return res.status(400).json({ message: "All fields are required" });

    const newPost = new Post({ userid, title, body });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    if (!foundPost) return res.status(404).json({ message: "Post not found" });
    res.json(foundPost);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, body } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true }
    );
    if (!updatedPost)
      return res.status(404).json({ message: "Post not found" });
    res.json(updatedPost);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({
      message: "Post deleted successfully",
      deletedPost,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { body, title } = req.body;

    // if (title) {
    //   return res.status(400).json({
    //     message: "You can only update the 'body' field.",
    //   });
    // }

    if (!body) {
      return res.status(400).json({ message: "'body' is required" });
    }

    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      { body },
      { new: true}
    );

    if (!updated) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({ message: "Body updated successfully", updated });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = router;


