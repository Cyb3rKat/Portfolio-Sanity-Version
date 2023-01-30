const Projects = require("./../models/projects");
const sharp = require("sharp");

// @Get All Projects
exports.getAllProjects = async (req, res) => {
  const allProjects = await Projects.find();

  if (allProjects) {
    return res.status(200).json({
      status: "Success",
      results: allProjects.length,
      data: allProjects,
    });
  }
};

exports.getProjectFeaturedImage = async (req, res) => {
  try {
    // console.log(req.params.projectsId);
    const id = req.params.projectsId;
    const project = await Projects.findById(id);
    console.log(project._id);
    if (!project || project.length === 0) {
      return res
        .status(400)
        .json({ status: "Error", message: "Please provide a valid ID" });
    }
    const image = project.featuredImage;

    res.set("Content-Type", "image/png");
    // console.log(image);
    return res.send(image);
  } catch (error) {
    console.log(error);
  }
};

// @Create Project
exports.createProject = async (req, res) => {
  const {
    title,
    description,
    client,
    technologyStack,
    technologiesUsed,
    website,
    date,
  } = req.body;

  try {
    console.log(req.file);
    const featuredImage = await sharp(req.file.buffer).png().toBuffer();

    const newProject = await Projects.create({
      title,
      description,
      client,
      technologyStack,
      technologiesUsed,
      website,
      date,
      featuredImage,
    });
    res.status(201).json({
      status: "Success",
      data: newProject._id,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: "Error",
      message:
        "Please provide title,description,client,technologiesUsed,website,date,featuredImage",
    });
  }
};

// @Get Single Project By Id
exports.getSingleProject = async (req, res) => {
  const id = req.params.projectID;

  const project = await Projects.find({ _id: id });

  if (!project || project.length === 0) {
    return res.status(400).json({
      status: "Error",
      message: "Please Provide a Valid id",
    });
  }

  return res.status(200).json({ status: "Success", data: project });
};

// @Delete Single Project
exports.deleteProject = async (req, res) => {
  try {
    const id = req.params.projectID;
    const project = await Projects.find({ _id: id });

    if (!project || project.length === 0) {
      return res.status(400).json({
        status: "Error",
        message: "Please Provide a Valid id",
      });
    }

    const deletedProject = await Projects.deleteOne({ _id: id });

    return res.status(204).json({
      status: "Success",
      message: "Project Deleted",
    });
  } catch (error) {}
};
