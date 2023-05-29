const { User } = require("../Model/Model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  // console.log("PASS", req.body.password);
  // console.log("C PASS", req.body.confirm_password);
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  if (req.body.password == req.body.confirm_password) {
    const foundUser = await User.findOne({
      where: { email: req.body.email },
    });
    !foundUser
      ? await User.create({
          name: req.body.company_name,
          password: hashedPassword,
          email: req.body.email,
        })
      : console.log("User already exists");
  } else {
    console.log("Confirm password and password should be same");
  }
};
const login = async(req, res)=> {
  const {company_name, email, password} = await req.body;
  // const hashedPassword = await bcrypt.hash(password, 10)
  const user = await User.findOne({
    name: company_name,
    email,
    password
  })
  console.log(user);
  if(user) {
    console.log("Login Success");
  } else {
    console.log("User not found");
  }
  res.redirect('/login')
}
module.exports = {register,login}
