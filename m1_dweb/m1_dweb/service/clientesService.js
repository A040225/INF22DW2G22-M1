const models = require("../models");
const faturaModel = models.fatura;
const produtoModel = models.produto;
const clienteModel = models.cliente;
const detalheFaturaModel = models.detalheFatura
const op = models.op;


module.exports = {
    getAll,
    findOne,
    createcliente,
    changecliente,
};
/* buscar todos os clientes*/
async function getAll() {
    return clienteModel.findAll( );
}

async function findOne({nome})  {
    return clienteModel.findAll( {where :  {nome: { [op.substring]: `${nome}` }}} )
       
} 

async function createcliente( nome, morada,) {
    return (clienteModel.create({nome: `${nome}`,morada: `${morada}`})
    )}
async function changecliente(id, nome, morada,) {
    await clienteModel.update({nome: `${nome}`,morada: `${morada}`}, {where :  {id: { [op.eq]: `${id}` }}});
    return clienteModel.findAll( {where :  {id: { [op.eq]: `${id}` }}} )
    }