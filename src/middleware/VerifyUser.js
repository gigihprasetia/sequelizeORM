import e from "express";
import UserModel from "../Model/UsersModels.js";

export const VerifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    res.json({ msg: "anda belum login" });
  } else {
    await UserModel.findOne({
      where: {
        uuid: req.session.userId,
      },
    }).then((val) => {
      if (!val) {
        res.json({ msg: "user tidak ditemukan" });
      } else {
        req.userId = val.id;
        req.role = val.role;
      }
    });
  }
};
