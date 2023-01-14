import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import DB from "./connection/DB.js";

dotenv.config();
const port = process.env.PORT_ENV;
const app = express();

app.use(express.json());

app.listen(port, () => console.log("running on port" + port));
