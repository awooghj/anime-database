const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

//this is the part of body parser we want to use, and this is
// because the client is gonna to be sending JSON to the server
// so we're gonna need to be able to parse that
app.use(express.json());
app.use(cookieParser());

// the reason why we use seNewUrlParser:true is because if you
// don't use it, the system will give you a deprecation warning
mongoose.connect(
  "mongodb://localhost:27017/anime",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connect to database");
  }
);

const userRouter = require("./routes/User");
app.use("/user", userRouter);

// we listen to port 5000 since the defalut react listens to 3000
app.listen(5000, () => {
  console.log("express server started");
});
