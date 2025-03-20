const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
  res.send(posts);
});

const posts = {};

// The query service will listen for events from the event bus
// and update its own data structure accordingly
app.post('/events', (req, res) => {
  const {type, data} = req.body;
  console.log(type, data);
  if(type === 'PostCreated') {
    const {id, title} = data;
    posts[id] = {id, title, comments: []};
  }
  if(type === 'CommentCreated') {
    const {id, content, postId} = data;
    const post = posts[postId];
    post.comments.push({id, content});
  }
  console.log(posts);
  });

app.listen(4002, () => {
  console.log('Listening on 4002');
}); 