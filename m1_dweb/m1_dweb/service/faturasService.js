const models = require("../models");
const faturaModel = models.fatura;
const produtoModel = models.produto;
const clienteModel = models.cliente;
const detalheFaturaModel = models.detalheFatura
const op = models.op;


module.exports = {
   
    getAll,
    findOne,
    createfatura
};

async function getAll() {
    return faturaModel.findAll( );
}

async function findOne({id})  {
    return faturaModel.findByPk(id,{ 
        include: [{model:clienteModel, required:false,
            attributes :[`nome`]
} ,  { 
    model: produtoModel,
      attributes :[`nome`, 'preco']},
]
}   
)}
async function createfatura(clienteId, descricao,faturaId,produtoId, quantidade) {
    const findcliente = await clienteModel.findOne({ where: { id : clienteId } }).catch((err) => {
    console.log(err);
        });
        if (findcliente) {
            return (faturaModel.create({clienteId: `${clienteId}`,descricao: `${descricao}`} )
            /*{include : [ {association :
            detalheFaturaModel} ]})
            /*(detalheFaturaModel.create ({faturaId : `${faturaId}`,produtoId, quantidade}))*/  )
        } else 
       {
            return (`o cliente ${clienteId} ainda nao esta criado existe`);
        }

        }





