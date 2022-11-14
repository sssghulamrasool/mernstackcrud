const UserModel = require("../model/userScheme");
exports.postRoutes = (req, res) => {
  const result = new UserModel({
    username: req.body.name,
    useremail: req.body.email,
    userphoneno: req.body.phoneno,
    useraddress: req.body.address,
    usercity: req.body.city,
  });

  result.save();
  res.send("data send successfully");
};
exports.getRoutes = async (req, res) => {
  const result = await UserModel.find();
  res.send(result);
};
exports.updateRoutes = async (req, res) => {
  UserModel.updateOne(
    { _id: req.params.id },
    {
      username: req.body.name,
      usermail: req.body.email,
      userphone: req.body.phoneno,
      useraddress: req.body.address,
      usercity: req.body.city,
    },
    (err, docs) => {
      if (!err) {
        res.send({
          message: "succesfully",
        });
      }
    }
  );
};
exports.deleteRoutes = async (req, res) => {
  await UserModel.deleteOne({ _id: req.params.id });
  res.send({
    message: "succesfully",
  });
};
