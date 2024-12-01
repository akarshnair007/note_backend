const user = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.addUserController = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);

  try {
    const newUser = new user({
      username,
      email,
      password,
      title: "",
      description: "",
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.loginUserController = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const exisitingUser = await user.findOne({ email, password });
    if (exisitingUser) {
      const token = jwt.sign({ userId: exisitingUser._id }, "superscretkey");
      res.status(200).json({ exisitingUser, token });
    } else {
      res.status(401).json("No user found");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
