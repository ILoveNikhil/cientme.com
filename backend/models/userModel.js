import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please enter first name"],
  },
  fullName: {
    type: String,
    // required: [true, "Please enter fullName "],
  },
  userName: {
    type: String,
    // required: [true, "Please enter userName "],
  },
  phoneNumber: {
    type: Number,
    // required: [true, "Please enter phoneNumber "],
  },
  email: {
    type: String,
    required: [true, "Please enter Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please enter Password"],
    select: false,
  },
  avatar: {
    public_id: String,
    url: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
// bcrypt -hash password befor store in db
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});
//  is password match
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
// generate jwt token
userSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// getResetPasswordToken
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};
export const User = mongoose.model("User", userSchema);
