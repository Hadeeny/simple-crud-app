const app = express();
import mongoose from "mongoose";
import express from "express";
import User from "../models/userModel.js";
import dotenv from "dotenv";

const router = express.Router();

dotenv.config();

// fetch all users
router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(200).json({ message: "CRUD app", users });
    }
  });
});

// fetch a single user
router.get("/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(200).json({ message: "Gets a single user", user });
    }
  });
});

router.post("/", (req, res) => {
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
    },
    (err, newUser) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res.status(200).json({ message: "New user created", newUser });
      }
    }
  );
});

// update a single book
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
    },
    (err, user) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else if (!user) {
        return res.status(404).json({ message: "book not found" });
      } else {
        user.save((err, savedUser) => {
          if (err) {
            return status(400).json({ message: err });
          } else {
            return res
              .status(200)
              .json({ message: "User updated successfully" });
          }
        });
      }
    }
  );
});

// delete a user
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(200).json({ message: "User deleted succesfully" });
    }
  });
});

export default router;
