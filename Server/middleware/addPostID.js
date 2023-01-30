addPostID = async (req, res, next) => {
  console.log("we reached addpostid");
  const id = req.params.postID;
  return (req.body.postID = id);

  next();
};

module.exports = addPostID;
