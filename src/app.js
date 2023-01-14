import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import DB from "./connection/DB.js";

dotenv.config();
const port = process.env.PORT_ENV;
const app = express();

(async () => {
  await DB.authenticate()
    .then(() => console.log("database is connect 1"))
    .catch((err) => console.log(err, "database not connect"));
})();

app.listen(port, () => console.log("running on port" + port));
