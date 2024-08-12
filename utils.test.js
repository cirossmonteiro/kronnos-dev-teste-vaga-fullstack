const fs = require('fs');

const { connectDB, Installment } = require("./db");
const utils = require("./utils");
const { sequelize, testdb } = require('./db/index');


 
test('CPF', () => {
  expect(utils.validateCPF("12625170794")).toBeTruthy();
  expect(utils.validateCPF("12625170793")).toBeFalsy();
});

test('CNPJ', () => {
  expect(utils.validateCNPJ("27860094000125")).toBeTruthy();
  expect(utils.validateCNPJ("27860094000124")).toBeFalsy();
});

test('database', async () => {
  /*const testFilename = 'test.sqlite3';
  const db = await connectDB(testFilename);
  db.sync();
  const oneInstallment = new Installment({
    vlTotal: "ciro",
    // id: 1
  });
  oneInstallment.save();
  const oneInstallment2 = new Installment({
    vlTotal: "ciro2"
  });
  oneInstallment2.save();*/
  // console.log(32, testdb);
  await testdb.sync();
  // try {
    const oneInstallment = await testdb.models.installment.create({
      // id: 123,
      vlTotal: "ciro"
    });
  // } catch(err) {
  //   console.log(3999999, err);
  // }
  const oneInstallment2 = await testdb.models.installment.create({
    vlTotal: "ciro2"
  });
  console.log(2333, oneInstallment.id);
  console.log(2334, oneInstallment2.id);
  // console.log("db file removed");
  // fs.unlinkSync(testFilename);
})