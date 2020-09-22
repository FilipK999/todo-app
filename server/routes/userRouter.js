const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/User");

const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

router.post("/register", async (req, res) => {
  try {
    const { email, password, password2, username } = req.body;

    if (!email || !password || !password2 || !username) {
      return res.send({
        failure: true,
        message: "All fields are required"
      });
    }

    if (!re.test(String(email.toLowerCase()))) {
      return res.send({
        failure: true,
        message: "Provide a valid email address"
      });
    }

    if (password.length < 8) {
      return res.send({
        failure: true,
        message: "The password needs to be at least 8 characters long"
      });
    }

    if (password !== password2) {
      return res.send({
        failure: true,
        message: "The passwords don't match"
      });
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.send({
        failure: true,
        message: "This email address is already in use"
      });
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
      return res.send({
        failure: true,
        message: "All fields are required"
      });
    }

    if (!re.test(String(email.toLowerCase()))) {
      return res.send({
        failure: true,
        message: "Provide a valid email address"
      });
    }

    User.findOne({ email: email.toLowerCase().trim() }, async (err, user) => {
      if (!user) {
        return res.send({
          failure: true,
          message: "Invalid email or password"
        });
      }
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
        return res.send({
          failure: true,
          message: "Invalid email or password"
        });
      }
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    username: user.username,
    id: user._id
  });
});

router.post("/addTask", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);

    await User.updateOne(
      { _id: req.user },
      { tasks: [...(user.tasks ? user.tasks : null), req.body.task] },
      { upsert: true }
    );

    res.json(true);
  } catch (error) {
    res.json({
      message: error.message
    });
  }
});

router.post("/deleteTask", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    await User.updateOne(
      { _id: req.user },
      { tasks: user.tasks.filter(task => task.id !== req.body.task.id) },
      { upsert: true }
    );
    res.json(true);
  } catch (error) {
    res.json({
      message: error.message
    });
  }
});

router.get("/tasks", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    tasks: user.tasks
  });
});

module.exports = router;
