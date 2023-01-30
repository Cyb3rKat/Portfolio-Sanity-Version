const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide a Title"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please Provide a description"],
  },
  featuredImage: {
    type: String,
    required: [true, "Please Provide a Featured Image for The Post"],
  },
});

const PostModel = mongoose.model("Posts", PostSchema);
module.exports = PostModel;
