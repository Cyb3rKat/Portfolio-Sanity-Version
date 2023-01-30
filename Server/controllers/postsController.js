const Posts = require("../models/Posts");
// const sharp = require("sharp");

// @Get All Articles
exports.getArticles = async (req, res) => {
  try {
    const articles = await Posts.find();
    return res.json({
      message: "success",
      results: articles.length,
      data: articles,
    });
  } catch (err) {
    console.log(err);
  }
};

// exports.getArticleFeaturedImage = async (req, res) => {
//   console.log("we reached get article fi");

//   try {
//     const id = req.params.postID;
//     const article = await Posts.find({ _id: id });
//     if (!article || article.length === 0) {
//       return res
//         .status(400)
//         .json({ status: "Error", message: "Please provide a valid ID" });
//     }
//     const image = article.featuredImage.res.set("Content-Type", "image/png");
//     res.send(image);
//   } catch (error) {
//     console.log(err);
//   }
// };

// @Get Single Article
exports.getSingleArticle = async (req, res) => {
  try {
    const article = await Posts.find({ _id: req.params.postID });
    if (!article || article.length === 0) {
      return res.status("404").json({
        status: "error",
        message: "No Article with that Id",
      });
    }
    return res.status(200).json({
      status: "Success",
      data: article,
    });
  } catch (error) {
    console.log(error);
    return res.status("404").json({
      status: "error",
      message: "No Article with that Id",
    });
  }
};

// @Post Article
exports.postArticle = async (req, res) => {
  const imagepath = req.file.path.split("public", 2)[1];

  try {
    const newPost = await Posts.create({
      title: req.body.title,
      description: req.body.description,
      featuredImage: imagepath,
    });

    return res.status(200).json({
      status: "Success",
      data: newPost,
    });
  } catch (err) {
    console.log(err);
  }
};

// @Delete single Article
exports.deleteArticle = async (req, res) => {
  try {
    const id = req.params.postID;
    const Article = await Posts.find({ _id: id });

    console.log(Article);

    if (!Article || Article.length === 0) {
      return res.status(404).json({
        status: "Error",
        message: "Please Provide a Valid ID",
      });
    }

    const deletedArticle = await Posts.deleteOne({ _id: id });
    res.status(204).json({
      status: "Success",
      message: "Post Deleted",
    });
  } catch (error) {
    console.log(error);
  }
};
