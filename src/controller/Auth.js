import UserModel from "../Model/UsersModels.js";
import argon from "argon2";

export const LoginUser = async (req, res) => {
  console.log(req.session, "1");
  await UserModel.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then(async (val) => {
      if (val === null) {
        res.status(400).json({
          msg: `cannot find email account ${req.body.email}`,
        });
      } else {
        if (req.body.email === undefined || req.body.password === undefined) {
          res.status(400).send({ msg: "email dan password required" });
        } else {
          const matchPassword = await argon.verify(
            val.password,
            req.body.password
          );
          if (!matchPassword) {
            res.status(400).send({ msg: "wrong password" });
          } else {
            req.session.userid = val.uuid;
            console.log(req.session, "2");
            res.json({
              msg: "success Login",
              data: {
                uuid: val.uuid,
                email: val.email,
                username: val.username,
                role: val.role,
              },
            });
          }
        }
      }
    })
    .catch((err) => res.json(err));
};

export const isLogin = async (req, res) => {
  if (!req.session.userid) {
    return res.json({ msg: "anda belum Login" });
  } else {
    await UserModel.findOne({
      where: {
        uuid: req.session.userid,
      },
    }).then((val) => {
      if (!val) {
        return res.json({ msg: "user tidak di temukan" });
      } else {
        return res.json({
          uuid: val.uuid,
          email: val.email,
          username: val.username,
          role: val.role,
        });
      }
    });
  }
};

export const logOutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.json({ msg: "cannot Logout" });
    } else {
      return res.json({ msg: "logout success" });
    }
  });
};
