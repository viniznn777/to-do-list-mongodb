const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../middlewares/verifyToken");

router.post("/register", async (req, res) => {
  const { email, password, fname } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fname,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    return res.status(201).json({
      message: "User created successfully!",
      userCreatedAt: user.date,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error in registration" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    User.findOne({ email: email }).then((user) => {
      if (!user) {
        return res.status(400).json({ message: "Email not registered" });
      }

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return done(err);
        }

        if (isMatch) {
          const token = generateToken(user);
          res.cookie("token", token, {
            domain: "localhost",
            path: "/",
            httpOnly: true,
            secure: false,
          });

          res.cookie("id", user._id.toString(), {
            domain: "localhost",
            path: "/",
            httpOnly: true,
            secure: false,
          });

          console.log("Token cookie:", token);
          console.log("ID cookie:", user._id.toString());

          return res.status(200).json({ fname: user.fname });
        } else {
          return res.status(400).json({ message: "Invalid credentials!" });
        }
      });
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Something went wrong when logging in!" });
  }
});

// Rota para verificar o status de autenticação
router.get("/checkAuthStatus", verifyToken, (req, res) => {
  // Se chegou aqui, o token é válido
  res.status(200).json({ message: "Authenticated" });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("id");
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;
