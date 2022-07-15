const express = require("express");
const userRouter = express.Router();
const { signup, sigin } = require("../controllers/userController");

userRouter.post("/signup",signup);

userRouter.post("/signin",sigin);

module.exports = userRouter;