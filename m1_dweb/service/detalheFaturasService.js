const models = require("../models");
const faturaModel = models.fatura;
const produtoModel = models.produto;
const clienteModel = models.cliente;
const detalheFaturaModel = models.detalheFatura
const op = models.op;


module.exports = {
    createdetalhefatura
};


async function createdetalhefatura(lista) {
    lista.products.forEach((item) => {
    detalheFaturaModel.create({faturaId: `${item.faturaId}`,produtoId: `${item.produtoId}`,quantidade: `${item.quantidade}`})
    });
    return  (lista)}





/*async function createdetalhefatura( faturaId, produtoId, quantidade) {
    /*console.log(quantidade)
     (detalheFaturaModel.create({faturaId: `${faturaId}`,produtoId: `${produtoId}`,quantidade: `${quantidade}`} ))
    }*/



