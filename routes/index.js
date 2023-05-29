const express = require("express")
const router = express.Router();
const authController = require('../controller/auth.js')
router.get("/", (req, res) => {
  res.render("index");
});
router.get('/login', (req, res)=> {
  res.render('pages/login')
})
router.post("/login", authController.login);


router.get("/register", (req, res)=> {
  res.render("pages/register.ejs")
})
router.post('/register', authController.register);

module.exports = router;