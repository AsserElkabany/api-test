const express = require("express");
const PORT = 3000;
const { handler } = require("./controllers/user");
const mongoose = require("mongoose");

const url = 'mongodb+srv://asser337:nodejs_11.11@cluster0.ceji32w.mongodb.net/chattera?';

const app = express();
app.use(express.json());


app.post("/", async (req, res) => {
  console.log(req.body);
  res.send(await handler(req, "POST"));
});

app.get("/", async (req, res) => {
  res.send(await handler(req, "GET"));
});


app.get("/user", async (req, res) => {
  res.send(await handler(req, "GET"));
})

mongoose.connect(url, {  
})
.then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
})
.catch(err => console.log(err));
