import { Sequelize } from "sequelize";

const DB = new Sequelize("ecommerce", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

(async () => {
  await DB.authenticate()
    .then(() => console.log("database is connect 1"))
    .catch((err) => console.log(err, "database not connect"));
})();

export default DB;
