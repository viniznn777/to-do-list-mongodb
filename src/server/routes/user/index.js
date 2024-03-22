const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const verifyToken = require("../../middlewares/verifyToken");
const verifyUserId = require("../../middlewares/verifyUserId");
const bcrypt = require("bcrypt");
const Task = require("../../models/Task");

router.get("/email", verifyToken, verifyUserId, async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    res
      .status(200)
      .json({ message: "User found successfully!", data: user.email });
  } catch (err) {
    console.error("Error when searching for user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/change/email", verifyToken, verifyUserId, async (req, res) => {
  try {
    const { email } = req.body;

    const existingEmail = await User.findOne({ email: email });

    if (existingEmail) {
      return res.status(409).json({ message: "Email is already in use!" });
    }

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    await User.findByIdAndUpdate(
      { _id: req.userId },
      { email: email },
      { new: true }
    );

    res.status(200).json({ message: "Email updated successfully!" });
  } catch (err) {
    console.error("Error updating user email:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/delete_acc", verifyToken, verifyUserId, async (req, res) => {
  try {
    const { password } = req.body;

    const user = await User.findOne({ _id: req.userId });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Unable to find your account in the database!" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const deleteUser = await User.deleteOne({ _id: req.userId });

    if (deleteUser) {
      await Task.deleteMany({ userId: req.userId });
    }

    return res.status(200).json({ message: "User deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal error" });
  }
});

module.exports = router;
