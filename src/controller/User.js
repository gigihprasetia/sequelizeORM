import UserModel from "../Model/UsersModels.js";
import argon from "argon2";

export const createUser = async (req, res) => {
  const { email, username, password, role } = req.body;
  try {
    const hashPassword = await argon
      .hash(password)
      .then((val) => val)
      .catch((err) => err);
    console.log(hashPassword);

    await UserModel.create({
      email,
      username,
      password: hashPassword,
      role,
    });
    res.json({ msg: "userCreated" });
  } catch (error) {
    res.status(500);
  }
};

export const getAllUser = async (req, res) => {
  await UserModel.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((val) =>
      res.json({
        data: val,
        status: 200,
      })
    )
    .catch((err) => res.json(err));
};

export const getUserById = async (req, res) => {
  console.log("jaja");
  await UserModel.findOne({
    where: {
      uuid: req.params.id,
    },
    attributes: {
      exclude: ["password"],
    },
  })
    .then((val) => res.json({ data: val }))
    .catch((err) => res.json(err));
};

export const deleteUser = async (req, res) => {
  await UserModel.destroy({
    where: {
      uuid: req.params.id,
    },
  })
    .then(() => res.json({ msg: `id:${req.params.id}` }))
    .catch((err) => res.json(err));
};

export const updateUser = async (req, res) => {
  const { username, password, email, role } = req.body;
  const hashPassword = await argon
    .hash(password)
    .then((val) => val)
    .catch((err) => err);
  console.log(hashPassword);
  await UserModel.update(
    {
      email,
      username,
      password: hashPassword,
      role,
    },
    {
      where: {
        uuid: req.params.id,
      },
    }
  )
    .then(() => res.json({ msg: "update succes" }))
    .catch((err) => res.json({ msg: err }));
};
