const bcrypt = require("bcrypt");
const { addUser } = requier("../lib/user/userCrud.js");

function getUsers(req, res, next) {
  res.render("user.ejs");
}

function addUsers(req, res, next) {
  let userObj = {};
  const hashedPassword = bcrypt.hash(req.body.password, 10);
  if (req.files && req.files.length > 0) {
    userObj = {
      ...req.body,
      password: hashedPassword,
      avater: req.files[0].filename,
    };
  } else {
    userObj = {
      ...req.body,
      password: hashedPassword,
    };
  }
  addUser(userObj, (isErorr, err) => {
    if (isErorr) {
      res.status(500).json({
        errors: {
          common: {
            msg: "Unknow error occured",
          },
        },
      });
    } else {
      res.status(200).json({
        message: "User was added successfully!",
      });
    }
  });
}

module.exports = {
  getUsers,
};
