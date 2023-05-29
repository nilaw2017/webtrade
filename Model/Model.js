const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.PASS,
  {
    host: process.env.HOST,
    dialect: "mysql",
  },
);

const User = sequelize.define("users", {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 100,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "business",
    allowNull: false,
  },
});

// sequelize.sync({alter: true});

module.exports = { User };
