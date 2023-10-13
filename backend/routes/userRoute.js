import express from "express";
import {
  forgotPassword,
  getUserDetails,
  login,
  logout,
  resetPassword,
  signup,
  updatePassword,
} from "../controllers/userCtrls.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

// router
const router = express.Router();

router.post("/signup", signup); // working
router.post("/login", login); // working
router.route("/password/forgot").post(forgotPassword); // working
router.route("/password/reset/:token").put(resetPassword); // working
router.route("/me").get(isAuthenticatedUser, getUserDetails); // working
router.route("/password/update").put(isAuthenticatedUser, updatePassword); // working
router.route("/logout").get(isAuthenticatedUser, logout); // working

export default router;
