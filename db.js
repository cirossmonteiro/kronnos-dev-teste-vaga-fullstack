const Sequelize = require("sequelize");
const schemas = require("./schemas");


const connectDB = async (dbfileName = "my_db.sqlite3") => {
  const connection = new Sequelize({
    dialect: "sqlite",
    storage: dbfileName
  });
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
    return connection;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports.connectDB = connectDB;

class Installment extends Sequelize.Model {};

Installment.init(schemas.installmentSchema, {
  sequelize: new Sequelize({
    dialect: "sqlite",
    storage: "my_db.sqlite3"
  }),
  modelName: "Installment"
});

module.exports.Installment = Installment;