const express = require("express");
const router = express.Router({ mergeParams: true });

const uploadPosts = require("../middleware/uploadPosts");
const postsController = require("../controllers/postsController");

// const addPostID = require("../middleware/addPostID");

router
  .route("/")
  .get(postsController.getArticles)
  .post(uploadPosts.single("file"), postsController.postArticle);

router
  .route("/:postID")
  .get(postsController.getSingleArticle)
  .delete(postsController.deleteArticle);

// router.route("/:postID/avatar").get(postsController.getArticleFeaturedImage);

module.exports = router;
