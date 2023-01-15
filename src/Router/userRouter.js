import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../controller/User.js";
import { VerifyUser } from "../middleware/VerifyUser.js";

const UserRouter = express.Router();

UserRouter.get(`/users`, VerifyUser, getAllUser);
UserRouter.get(`/user/:id`, VerifyUser, getUserById);
UserRouter.post(`/createuser`, VerifyUser, createUser);
UserRouter.delete(`/deleteuser/:id`, VerifyUser, deleteUser);
UserRouter.patch(`/updateuser/:id`, VerifyUser, updateUser);

export default UserRouter;
