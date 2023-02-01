const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const blogRouter = require("./routes/blogRouter");

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
const port = process.env.PORT || 5000;

//database connection
mongoose.set("strictQuery", true);
mongoose
  .connect(
    `mongodb+srv://daily-blog-admin:${process.env.PASSWORD}@cluster0.k4dac3z.mongodb.net/?retryWrites=true&w=majority`
  )
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
