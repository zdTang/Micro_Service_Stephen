const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
  res.send('Hello World!');
});

app.post('/events', (req, res) => {
    res.send('Hello World!');
  });

app.listen(4002, () => {
  console.log('Listening on 4002');
}); 