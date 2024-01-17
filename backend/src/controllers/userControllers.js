const User = require("./../model/userModel");

const getData = async (req, res) => {
  let allData = await User.find({});
  res.send(allData);
};

const deleteData = async (req, res) => {
  const deleted = await User.findByIdAndDelete({ _id: req.params.id });
  res.send(deleted);
};

const postData = async (req, res) => {
  const newData = await User(req.body);
  await newData.save();
  res.send(newData);
};

module.exports = { getData, deleteData, postData };
