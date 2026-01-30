const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    if (!username || !email || !phone || !password) {
      return res.json({ status: false, msg: "All fields required" });
    }

    const exists = await User.findOne({ email });
    if (exists) return res.json({ status: false, msg: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      phone,
      password: hashed,
    });

    await user.save();

    res.json({ status: true, msg: "Signup successful" });

  } catch (error) {
    console.log("Signup Error:", error);
    return res.json({ status: false, msg: "Something went wrong", error: error.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if ((!email && !username) || !password) {
      return res.json({
        status: false,
        msg: "Username/Email & Password required"
      });
    }

    // Search by either email OR username
    const user = await User.findOne({
      $or: [
        { email: email || "" },
        { username: username || "" }
      ]
    });

    if (!user) {
      return res.json({
        status: false,
        msg: "Wrong username/email or password"
      });
    }

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ status: false, msg: "Wrong username/email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // res.json({ status: true, token, msg: "Login success" });
    res.json({
      status: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone
      }
    });

  } catch (err) {
    console.log("Login Error:", err);
    res.json({ status: false, msg: "Login failed" });
  }
});

// POST - Only you (from Postman) can upload the QR image
const QrImage = require("../models/QrImage");

// POST - Only you upload from Postman (no auth needed)
router.post("/upload-qr", async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl || !imageUrl.startsWith("http")) {
      return res.json({ status: false, msg: "Valid imageUrl is required" });
    }

    let qr = await QrImage.findOne();
    if (qr) {
      qr.imageUrl = imageUrl;
      await qr.save();
    } else {
      qr = await QrImage.create({ imageUrl });
    }

    res.json({
      status: true,
      msg: "QR uploaded successfully!",
      imageUrl
    });

  } catch (error) {
    console.error("Upload error:", error);
    res.json({ status: false, msg: "Upload failed" });
  }
});

// GET - Anyone can see the QR image (public)
router.get("/qr", async (req, res) => {
  try {
    const qr = await QrImage.findOne();

    res.json({
      status: true,
      qrImageUrl: qr ? qr.imageUrl : null
    });

  } catch (error) {
    res.json({ status: false, msg: "Error" });
  }
});

module.exports = router;
