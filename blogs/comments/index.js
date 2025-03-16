const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  console.log(commentsByPostId);
  console.log(req.params.id);
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:postId/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.postId] || [];
  comments.push({ id: commentId, content });
  console.log(req.params.postId);
  commentsByPostId[req.params.postId] = comments;

  //This is at backend,in a route handler
  //To be aware: we are using axios to send a post request to the event bus
  //The event bus will then send the event to all the services that are listening to it
  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.postId,
    },
  });
  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);
  res.send({});
});

app.listen(4001, () => {
  console.log("Server is running on port 4001");
});
