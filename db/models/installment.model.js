const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('installment', {
    nrInst: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
    nrAgencia: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
    cdClient: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
    nmClient: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
    nrCpfCnpj: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    nrContrato: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    dtContrato: {
			allowNull: false,
			type: DataTypes.STRING, // date
		},
    qtPrestacoes: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		vlTotal: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    cdProduto: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
    dsProduto: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    cdCarteira: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
    dsCarteira: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    nrProposta: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    nrPresta: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
    tpPrest: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    nrSeqPre: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
    dtVctPre: {
			allowNull: false,
			type: DataTypes.STRING, // date
		},
    vlPresta: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    vlMora: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    vlMulta: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    vlOutAcr: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    vlIof: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    vlDescon: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    vlAtual: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    idSituac: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    idSitVen: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	});
};