const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  console.log(commentsByPostId);
  console.log(req.params.id);
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:postId/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  console.log(req);
  const { content } = req.body;
  const comments = commentsByPostId[req.params.postId] || [];
  comments.push({ id: commentId, content });
  console.log(req.params.postId);
  commentsByPostId[req.params.postId] = comments;
  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("Server is running on port 4001");
});
