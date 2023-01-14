import DB from "../connection/DB.js";
import { Sequelize, DataTypes } from "sequelize";
import UserModel from "./UsersModels.js";
const ProductsModel = DB.define(
  "product",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nameproducts: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100],
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    //untuk relasi dengan product user
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

//relasi one to many agar user dapat mempunyai banyak product
UserModel.hasMany(ProductsModel);
ProductsModel.belongsTo(UserModel, { foreignKey: "userId" });

export default ProductsModel;
