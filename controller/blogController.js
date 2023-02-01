const Blog = require("../model/blogSchema");

//add blog
const addBlog = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const addBlog = new Blog({
      title,
      description,
    });
    const result = await addBlog.save();
    res.send({
      success: true,
      message: "Blog create successfull",
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: err.message,
    });
  }
};

//get update blog
const getUpdateBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blogDetails = await Blog.findOne({ _id: id });
    res.send({
      success: true,
      data: blogDetails,
    });
  } catch {
    res.send({
      success: false,
      message: "something went worng!",
    });
  }
};

//update blog by id
const updateBlog = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updateBlog = await Blog.updateOne({ _id: id }, { $set: req.body });
    if (updateBlog.acknowledged) {
      res.send({
        success: true,
        message: "update successfull",
      });
    } else {
      res.send({
        success: false,
        message: "something went worng!",
      });
    }
  } catch {
    res.send({
      success: false,
      message: "something went worng!",
    });
  }
};

//delete a blog
const deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  try {
      const result = await Blog.deleteOne({ _id: id });
    if (result.deletedCount) {
      res.send({
        success: true,
        message: "Blog Delete successfull",
      });
    } else {
      res.send({
        success: false,
        message: "Blog not deleted",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "something worng",
    });
  }
};

module.exports = {
  addBlog,
  getUpdateBlog,
  updateBlog,
  deleteBlog,
};
