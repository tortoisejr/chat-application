const User = require("../../model/people");

const addUser = async (user, cb) => {
  try {
    const newUser = new User(user);
    const result = await newUser.save();
  } catch (err) {
    console.log(err);
    cb(true, err);
  }
  cb(false, null);
};

module.exports = { addUser };
