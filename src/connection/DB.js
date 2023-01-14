import { Sequelize } from "sequelize";

const DB = new Sequelize("ecommerce", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

export default DB;
