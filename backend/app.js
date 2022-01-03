// Modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressLayouts = require("express-ejs-layouts");
const helmet = require("helmet");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const cors = require("cors");

//Routers
const homeRouter = require("./routers/homeRouter");
const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
//Initialize

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.static("Public")); // Static Files
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // parse Json

app.use(cookieParser()); // Cookies

//view engineapp.use(expressLayouts);
app.use(expressLayouts);
app.set("view engine", "ejs");

//DB(mongoose) Connect
const dbURI = "mongodb://localhost:27017/dokan";
mongoose
	.connect(dbURI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then((result) => app.listen(PORT, console.log(`Server Started on ${PORT}`)))
	.catch((err) => console.log(err));
//Routes
//app.get("*", requireAuth);
app.use(checkUser);
app.use(homeRouter);
app.use(authRouter);
app.use("/user", userRouter);
//404
