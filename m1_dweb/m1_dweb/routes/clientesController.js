const router = require('express').Router();
const clienteService = require('../service/clientesService');



// routes
router.get("/", getAll);
module.exports = router; 

function getAll(req, res, next) {
    clienteService.getAll()
        .then(clientes => res.json(clientes))
        .catch(err => next(err));
}
router.get('/:nome', findOne);
module.exports = router; 

function findOne (req , res, next) {
    clienteService.findOne({nome :req.params.nome})
        .then(clientes => res.json(clientes))
        .catch(err => next(err));}

router.post('/', createcliente);
module.exports = router;
        
function createcliente (req , res, next) {
    clienteService.createcliente( req.body.nome, req.body.morada )
                    .then(clientes => res.json(clientes))
                    .catch(err => next(err));
            }

router.put('/:id', changecliente);
module.exports = router;
                    
function changecliente (req , res, next) {
    clienteService.changecliente( req.body.id,req.body.nome, req.body.morada )
        .then(clientes => res.json(clientes))
        .catch(err => next(err));
    }