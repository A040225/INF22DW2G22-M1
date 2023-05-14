const router = require('express').Router();
const produtoService = require('../service/produtosService');
const auth = require('../controllers/BasicSecurity.js');



// routes
router.get("/", getAll);
module.exports = router; 

function getAll(req, res, next) {
  produtoService.getAll()
      .then(produtos => res.json(produtos))
      .catch(err => next(err));
}
router.get('/:nome', findOne);
module.exports = router; 

function findOne (req , res, next) {
    produtoService.findOne({nome :req.params.nome})
        .then(produtos => res.json(produtos))
        .catch(err => next(err));}

router.post('/',auth, createproduto);
module.exports = router;
        
function createproduto (req , res, next) {
    produtoService.createproduto( req.body.nome, req.body.preco )
                    .then(produtos => res.json(produtos))
                    .catch(err => next(err));
            }

router.put('/:id',auth, changeproduto);
module.exports = router;
                    
function changeproduto (req , res, next) {
    produtoService.changeproduto( req.body.id,req.body.nome, req.body.preco )
        .then(produtos => res.json(produtos))
        .catch(err => next(err));
    }