const Users = require("./../models/Users");

exports.getAllUsers = async (req, res) => {
  const allusers = await Users.find();

  if (allusers) {
    res.status(200).json({
      status: "Success",
      results: allusers.length,
      data: allusers,
    });
  }
};

exports.createUser = async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  try {
    const newUser = await Users.create({ name, age });
    res.status(201).json({
      status: "Success",
      data: newUser,
    });
  } catch (err) {
    console.log(err);
  }
};
