const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server has started"));

mongoose.connect(
  process.env.MONGO_DB,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  err => {
    if (err) throw err;
    console.log("MongoDB connected");
  }
);

app.use("/users", require("./routes/userRouter"));
