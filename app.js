const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
// const mysql = require("mysql");
// const passport = require("passport");
// const flash = require("connect-flash");
// const session = require("express-session");
const app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
  });
});

// // Passport Config
// require("./config/passport")(passport);

// // DB Config
// const connection = require("./config/db");

// // Connect to MongoDB

// // EJS
// app.use(expressLayouts);
// app.set("view engine", "ejs");

// // Express body parser
// app.use(express.urlencoded({ extended: true }));

// // Express session
// app.use(
//   session({
//     secret: "secret",
//     resave: true,
//     saveUninitialized: true
//   })
// );

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Connect flash
// app.use(flash());

// // Global variables
// app.use(function(req, res, next) {
//   res.locals.success_msg = req.flash("success_msg");
//   res.locals.error_msg = req.flash("error_msg");
//   res.locals.error = req.flash("error");
//   next();
// });

// // Routes;

// app.use("/", require("./routes/index.js"));
// app.use("/users", require("./routes/users.js"));

http.listen(port, function() {
  console.log("listening on *:" + port);
});
