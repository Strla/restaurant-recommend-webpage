const express = require("express");
const app = express();
const path = require("path");
const open = require("open");

const defaultRoutes = require("./routes/default");
const restaurantRoutes = require("./routes/restaurants");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", defaultRoutes);
app.use("/", restaurantRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});

app.use((error, req, res, next) => {
  res.status(500).render("500");
});

app.listen(3000);
open("http://localhost:3000/");
