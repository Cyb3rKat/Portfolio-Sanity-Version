const app = require("./app");
const chalk = require("chalk");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const port = 5000;

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, function (error) {
  if (error) console.log(error);

  console.log(chalk.blue.bold("MongoDb Connected"));
  app.listen(port, () => {
    console.log(
      chalk.green.bold(
        `server has started running on  http://localhost:${port}`
      )
    );
  });
});
