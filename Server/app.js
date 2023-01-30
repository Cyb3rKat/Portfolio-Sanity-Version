const express = require("express");
const path = require("path");

const usersRouter = require("./routes/userRoutes");
const postsRouter = require("./routes/postRoutes");
const projectsRouter = require("./routes/projectRoutes");
const cors = require("cors");

const app = express();

// 1- Global Middleware
app.use(express.json());
app.use(cors());

// 2- Serving Static Files
app.use("/media", express.static(path.join(__dirname, "media")));

//3- Routes
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/projects", projectsRouter);

module.exports = app;
