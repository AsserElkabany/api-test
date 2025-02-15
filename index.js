const express = require("express");
const PORT = 3000;
const { handler } = require("./controllers/user");
const mongoose = require("mongoose");

const url = 'mongodb+srv://asser337:nodejs_11.11@cluster0.ceji32w.mongodb.net/chattera?';

const app = express();
app.use(express.json());

const router = require("./routes/users");
app.use('/api', router);


mongoose.connect(url, {  
})
.then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
})
.catch(err => console.log(err));
