const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const verifyToken = require("../../middlewares/verifyToken");
const verifyUserId = require("../../middlewares/verifyUserId");

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

module.exports = router;
