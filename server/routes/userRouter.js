const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { email, password, password2, username } = req.body;

    if (!email || !password || !password2 || !username) {
      return res.status(400).json({ message: "This field is required" });
    }
    if (password.length < 5) {
      return res
        .status(400)
        .json({ message: "The password needs to be at least 5 characters long" });
    }

    if (password !== password2) {
      return res.status(400).json({ message: "The passwords don't match" });
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "This email address is already in use" });
    }

    const newUser = new User({
      email,
      username,
      password: bcrypt.hashSync(password, 10)
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "This field is required" });
    }
    User.findOne({ email: email.toLowerCase().trim() }, async (err, user) => {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        return res.json({
          user: {
            id: user._id,
            username: user.username,
            email: user.email
          },
          token
        });
      } else {
        return res.status(400).json({ message: "Invalid email or password" });
      }
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    username: user.username,
    id: user._id
  });
});

module.exports = router;
