const e = require("express");
const { response } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const createUser = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    const emailExist = await User.findOne({ email });

    if (emailExist) {
      return res.status(400).json({
        ok: false,
        msg: "This email already exist",
      });
    }

    // Save in DB
    const user = new User(req.body);

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password);
    await user.save();

    res.json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Contact the Administrator",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const renewToken = async (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { createUser, login, renewToken };
