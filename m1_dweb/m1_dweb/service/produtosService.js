const models = require("../models");
const faturaModel = models.fatura;
const produtoModel = models.produto;
const clienteModel = models.cliente;
const detalheFaturaModel = models.detalheFatura
const op = models.op;


module.exports = {
    getAll,
    findOne,
    createproduto,
    changeproduto,
};
/* buscar todos os clientes*/
async function getAll() {
    return produtoModel.findAll( );
}

async function findOne({nome})  {
    return produtoModel.findAll( {where :  {nome: { [op.substring]: `${nome}` }}} )
       
} 

async function createproduto( nome, preco,) {
    return (produtoModel.create({nome: `${nome}`,preco: `${preco}`})
    )}
async function changeproduto(id, nome, preco,) {
    await produtoModel.update({nome: `${nome}`,preco: `${preco}`}, {where :  {id: { [op.eq]: `${id}` }}});
    return produtoModel.findAll( {where :  {id: { [op.eq]: `${id}` }}} )
    }