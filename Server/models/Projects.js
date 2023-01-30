const mongoose = require("mongoose");
const validator = require("validator");

const ProjectsSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a Project Title"],
  },
  description: {
    type: String,
    required: [true, "Please provice a Project Description"],
  },
  client: {
    type: String,
  },
  technologiesUsed: [String],
  website: {
    type: String,
    required: [true, "Please enter the Project Website Link"],
    validate: {
      validator: (URL) => validator.isURL(URL),
      message: (URL) => `${URL.value} is not a valid Web Site`,
    },
  },
  date: Date,
  featuredImage: {
    type: Buffer,
    required: [true, "Please Provide a Featured Image for The Project"],
  },
});

const ProjectModel = mongoose.model("Projects", ProjectsSchema);

module.exports = ProjectModel;
