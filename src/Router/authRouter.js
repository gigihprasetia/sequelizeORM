import express from "express";
import { isLogin, LoginUser, logOutUser } from "../controller/auth.js";

const AuthRouter = express.Router();

AuthRouter.post(`/login`, LoginUser);
AuthRouter.get(`/islogin`, isLogin);
AuthRouter.delete(`/logout`, logOutUser);

export default AuthRouter;
