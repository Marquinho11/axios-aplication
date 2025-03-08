const Sequelize =require('sequelize');

const Product = new Sequelize('produtos','root','root',{
    host:'localhost',
    dialect: 'mysql'
});

try{
    Product.authenticate();
}catch(erro){
    console.log(erro);
}

module.exports = Product;