const { Sequelize } = require('sequelize');

const installmentModel = require("./models/installment.model");

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db.sqlite',
	logQueryParameters: true,
	benchmark: true
});

const testdb = new Sequelize({
	dialect: 'sqlite',
	storage: 'testdb.sqlite',
	logQueryParameters: true,
	benchmark: true
});

installmentModel(sequelize);
installmentModel(testdb);

module.exports.sequelize = sequelize;

module.exports.testdb = testdb;