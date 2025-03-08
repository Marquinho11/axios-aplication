const { raw } = require('body-parser');
const table = require('../models/Produtos');
module.exports = class ApiController{
    static async testeTwo(req, res){
        res.json({message: 'O teste 2 passou '});
    }

    static async cadastro(req, res) {
        const {nome,descricao,preco,categoria} = req.body;
        const produtoExist = await table.findOne({where:{nome:nome}});
        if(produtoExist){
            res.status(400).send('Produto existe');
        }
        try{
            table.create({
                nome: nome,
                descricao: descricao,
                preco: preco,
                categoria: categoria
            });
        res.status(200).send('produto cadastrado com sucesso');
        }catch(error){
            res.status(404).send('error ao cadastrar produto');
        }
      
        
    }

    static async product(req, res){
        try{
        const getProduto = await table.findAll({raw:true});
        res.json(getProduto);
        }catch(error){
            console.log(error);
        }
        
    }


    static async deleteProd(req, res){
        try {
            const { id } = req.params;
    
            // Tenta deletar o produto
            const produto = await table.destroy({
                where: { id: id }
            });
    
            if (produto) {
                res.status(200).json({ mensagem: 'Produto deletado com sucesso!' });
            } else {
                res.status(404).json({ mensagem: 'Produto não encontrado.' });
            }
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
            res.status(500).json({ mensagem: 'Erro ao deletar produto!' });
        }
    }

}