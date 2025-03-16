const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;
  await axios.post("http://localhost:4000/events", event); // sent event to comment
  await axios.post("http://localhost:4001/events", event); // sent event to post
  //Be aware, if one endpoint is down, the other will still work, so need use try catch block

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Event Bus listening on 4005");
});
