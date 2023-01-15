import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import DB from "./connection/DB.js";
import SequelizeStore from "connect-session-sequelize";
import session from "express-session";
import ProductRouter from "./Router/productRouter.js";
import UserRouter from "./Router/userRouter.js";
import AuthRouter from "./Router/authRouter.js";

dotenv.config();

// (async () => {
//   await DB.sync();
// })();
const sessionStorage = SequelizeStore(session.Store);
const store = new sessionStorage({
  db: DB,
});

const port = process.env.PORT_ENV;
const app = express();

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3002",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ProductRouter);
app.use(UserRouter);
app.use(AuthRouter);

// store.sync();

app.listen(port, () => console.log("running on port" + port));
