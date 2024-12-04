const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");

const register = asyncHandler(async (req, res, next) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    const hashPassword = bcrypt.hashSync(password, 8);
    const result = await User.create({ email, password: hashPassword, role });
    if (result) {
      const userObject = result.toObject();
      delete userObject.password;
      return res
        .status(201)
        .json({ message: "user created", data: userObject });
    }
  } else {
    return res.status(400).json({ message: "Email already exists." });
  }
});

const login = asyncHandler(async (req, res, next) => {
  //get data
  //check for empty data
  //check user exist
  //generate token
  //send info
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User doesn't exist." });
  } else {
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({
        message: "Invalid Email or Password!",
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET,
      {
        algorithm: "HS256",
        expiresIn: "30d",
      }
    );

    return res.status(200).send({
      message: "user logged in",
      data: {
        _id: user._id,
        email: user.email,
        role: user.role,
        token: token,
      },
    });
  }
});

module.exports = {
  register,
  login,
};
