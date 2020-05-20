const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");

//@descr Get all users
//@route GET /api/v1/auth/users
//@access Private/admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@descr Get single user
//@route GET /api/v1/auth/users/:id
//@access Private/admin
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorResponse(`User with ${req.params.id} not found`, 404));
  }

  res.status(200).json({ success: true, data: user });
});

//@descr Create user
//@route POST /api/v1/auth/users
//@access Private/admin
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({ success: true, data: user });
});

//@descr Update user
//@route PUT /api/v1/auth/users/:id
//@access Private/admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: user });
});

//@descr Delete user
//@route DELETE /api/v1/auth/users/:id
//@access Private/admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndRemove(req.params.id);

  res.status(200).json({ success: true, data: {} });
});
