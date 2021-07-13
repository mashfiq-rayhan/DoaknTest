// Modules
const express = require("express");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const {
  checkUser,
  requireGuest,
  requireAuth,
} = require("./middleware/authMiddleware");

//Routers
const homeRouter = require("./routers/homeRouter");
const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const dokanRouter = require("./routers/dokanRouter");

//Initialize

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(express.static("Public")); // Static Files
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // parse Json

app.use(cookieParser()); // Cookies

//view engineapp.use(expressLayouts);
//app.use(expressLayouts);
//app.set("view engine", "ejs");

//DB(mongoose) Connect
const dbURI = "mongodb://localhost:27017/dokan";
mongoose
  .connect(dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((result) => app.listen(PORT, console.log(`Server Started on ${PORT}`)))
  .catch((err) => console.log(err));
//Routes
app.use(checkUser);
app.use(homeRouter);
app.use(authRouter);
app.use("/user", userRouter);
app.use("/dokan", dokanRouter);
//404
