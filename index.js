const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const blogRouter = require("./routes/blogRouter");

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

//database connection
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => {
    console.log("database connection successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//route setup
app.use("/api", blogRouter);

//create server
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
