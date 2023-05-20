const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB_NAME,
});

const publicDir = path.join(__dirname, "/public");

app.use(express.static(publicDir));

app.set("view engine", "ejs");

db.connect((err) => {
  err
    ? console.log(err)
    : console.log("Database has been connected connected successfully");
});

app.use("/", require("./routes/index"))

app.listen(process.env.PORT, () => {
  console.log("Server has been started on PORT", process.env.PORT);
});
