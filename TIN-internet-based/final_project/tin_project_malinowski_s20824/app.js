var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var bodyParser = require("body-parser");
var app = express();
app.use(express.json());
// app.use(bodyParser.json());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/about", indexRouter);

const engineerRouter = require("./routes/engineerRoute");
app.use("/engineers", engineerRouter);
const bookingRouter = require("./routes/bookingRoute");
app.use("/bookings", bookingRouter);
const studioRouter = require("./routes/studioRoute");
app.use("/studios", studioRouter);

const sequelizeInit = require("./config/sequelize/init");
sequelizeInit().catch((err) => {
  console.log(err);
});

const songApiRouter = require("./routes/api/SongApiRoute");
app.use("/api/songs", songApiRouter);
const engineerApiRouter = require("./routes/api/EngineerApiRoute");
app.use("/api/engineers", engineerApiRouter);
const bookingApiRouter = require("./routes/api/BookingApiRoute");
app.use("/api/bookings", bookingApiRouter);
const studioApiRoute = require("./routes/api/StudioApiRoute");
app.use("/api/studios", studioApiRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
