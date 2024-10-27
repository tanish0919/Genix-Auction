import express from "express";
import User from "../model/user.js";
import Gadget from "../model/gadget.js";
import { auth } from "../middleware/auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exits!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.jwt, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "User created successfully!",
      user: newUser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.jwt, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Logged in Successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/gadgets", async (req, res) => {
  try {
    const gadget = await Gadget.find();
    res.status(200).json({ gadget });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/gadgets/:gadgetId", auth, async (req, res) => {
  const gadgetId = req.params.gadgetId;
  try {
    const gadget = await Gadget.findOne({ gadgetId });
    if (!gadget) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json({ gadget });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
