const express = require("express");
const path = require("path");

const connectDB = require("./sys_1_config/db");
const userRoutes = require("./sys_4_routes/routes_users");

const app = express();

// connect mongodb
connectDB();

// static public folder
app.use(express.static(path.join(__dirname, "public")));

// set EJS engine
app.set("view engine", "ejs");

// set custom views folder
app.set("views", path.join(__dirname, "sys_5_views"));

// debug path
//console.log(path.join(__dirname, "sys_5_views"));

// routes
app.use("/", userRoutes);

// start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});