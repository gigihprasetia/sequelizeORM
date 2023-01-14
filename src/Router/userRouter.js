import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../controller/User.js";

const UserRouter = express.Router();

UserRouter.get(`/users`, getAllUser);
UserRouter.get(`/user/:id`, getUserById);
UserRouter.post(`/createuser`, createUser);
UserRouter.delete(`/deleteuser/:id`, deleteUser);
UserRouter.patch(`/updateuser/:id`, updateUser);
