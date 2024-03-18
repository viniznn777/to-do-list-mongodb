const mongoose = require("mongoose");

const isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

const verifyUserId = (req, res, next) => {
  const userId = req.cookies.id;

  if (!userId || !isValidObjectId(userId)) {
    return res.status(401).json({ message: "Unauthorized: Invalid user ID" });
  }

  req.userId = userId;

  next();
};

module.exports = verifyUserId;
