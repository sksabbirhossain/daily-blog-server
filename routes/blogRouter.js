const express = require("express");
const {
  addBlog,
  getUpdateBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blogController");
const router = express.Router();

router.post("/add-blog", addBlog);
router.get("/blog-update/:id", getUpdateBlog);
router.post("/blog-update/:id", updateBlog);
router.delete("/blog-delete/:id", deleteBlog);

module.exports = router;
