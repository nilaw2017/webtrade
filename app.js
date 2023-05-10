const express = require("express");
require("dotenv");
const app = express();

app.get("/", (req, res) => {});
app.listen(process.env.PORT, () => {
  console.log("Server has been started on PORT", process.env.PORT);
});
