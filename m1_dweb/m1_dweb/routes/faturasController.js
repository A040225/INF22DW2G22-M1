const router = require('express').Router();
const faturaService = require('../service/faturasService');



// routes
router.get("/", getAll);
module.exports = router; 

function getAll(req, res, next) {
  faturaService.getAll()
      .then(users => res.json(users))
      .catch(err => next(err));
}
router.get('/:id', findOne);
module.exports = router; 

function findOne (req , res, next) {
    faturaService.findOne({id :req.params.id})
        .then(users => res.json(users))
        .catch(err => next(err));}

router.post('/', createfatura);
module.exports = router;
        
function createfatura (req , res, next) {
    faturaService.createfatura( req.body.clienteId, req.body.descricao,req.body.faturaId,req.body.produtoId, req.body.quantidade )
                    .then(users => res.json(users))
                    .catch(err => next(err));
                ;
            }