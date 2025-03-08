const Sequelize = require('sequelize');
const data = require('../database/data');

const table = data.define('produtos',{
    nome: {type: Sequelize.STRING, allowNull: false},
    descricao: {type: Sequelize.STRING, allowNull: false},
    preco: {type: Sequelize.INTEGER, allowNull:false},
    categoria: {type: Sequelize.STRING, allowNull: false}
});




module.exports = table;