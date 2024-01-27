const express = require("express");
const Cors = require("cors");
const CookieParser = require("cookie-parser");
const morgan = require("morgan");

const app = express();

//middlewarea
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extends: true, limit: "20kb" }));
app.use(express.static("./public"));
app.use(CookieParser());
app.use(Cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Server is working</h1>");
});

//import routers
const userRoute = require("./routes/user");

// routers declaration
app.use("/api/v1/user", userRoute);

// export {app};
module.exports = app;
