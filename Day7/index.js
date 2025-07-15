const express = require("express");
const fs = require("fs");
const rateLimit = require("express-rate-limit");
const app = express();

app.use(express.json()); 


app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 200,
    message: "Too many requests, try again after a minute.",
  })
);


const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
let posts = JSON.parse(data);


const CreateID = () => {
  const ids = posts
    .map((p) => Number(p.id))
    .filter((id) => !isNaN(id));
  return ids.length ? Math.max(...ids) + 1 : 1;
};


const getposts = (req, res) => {
  res.status(200).json(posts);
};


const createpost = (req, res) => {
  console.log("BODY RECEIVED:", req.body);
  const { userId, title, body } = req.body;

  if (typeof userId !== "string" || typeof title !== "string" || typeof body !== "string") {
    return res.status(400).json({ message: "Invalid or missing fields" });
  }

  const newpost = {
    id: CreateID(),
    userId,
    title,
    body,
  };

  posts.push(newpost);
  posts.sort((a, b) => a.id - b.id);
  fs.writeFileSync("./data.json", JSON.stringify(posts, null, 2), "utf-8");
  res.status(201).json(newpost);
};


const modifypost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) return res.status(404).json({ message: "Post not found" });

  const { userId, title, body } = req.body;
  if (typeof userId !== "number" || typeof title !== "string" || typeof body !== "string") {
    return res.status(400).json({ message: "All fields required with valid types" });
  }

  posts[index] = { id, userId, title, body };
  fs.writeFileSync("./data.json", JSON.stringify(posts, null, 2), "utf-8");
  res.status(200).json(posts[index]);
};


const updatePartial = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) return res.status(404).json({ message: "Post not found" });

  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({ message: "Request body is required." });
  }

  const { title, body } = req.body;

  if (!title && !body) {
    return res.status(400).json({ message: "At least title or body must be provided." });
  }

  const post = posts[index];
  posts[index] = {
    ...post,
    ...(title && { title }),
    ...(body && { body }),
  };

  fs.writeFileSync("./data.json", JSON.stringify(posts, null, 2), "utf-8");
  res.status(200).json(posts[index]);
};


const deletepost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) return res.status(404).json({ message: "Post not found" });

  const deleted = posts.splice(index, 1)[0];
  fs.writeFileSync("./data.json", JSON.stringify(posts, null, 2), "utf-8");
  res.status(200).json({ message: "Deleted", post: deleted });
};


app.route("/posts").get(getposts).post(createpost);
app.route("/posts/:id").put(modifypost).patch(updatePartial).delete(deletepost);


const port = 8000;
app.listen(port, () => {
  console.log("Server listening on port", port);
});
