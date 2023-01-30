const express = require("express");
const projectsController = require("../controllers/projectsController");
const uploadProjects = require("../middleware/uploadProjects");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(projectsController.getAllProjects)
  .post(
    uploadProjects.single("featuredImage"),
    projectsController.createProject
  );
router
  .route("/:projectID")
  .get(projectsController.getSingleProject)
  .delete(projectsController.deleteProject);

router
  .route("/:projectsId/avatar")
  .get(projectsController.getProjectFeaturedImage);

module.exports = router;
