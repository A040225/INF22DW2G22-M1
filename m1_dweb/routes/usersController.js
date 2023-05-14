const router = require('express').Router();
const userService = require('../service/usersService');


// routes
router.get('/', getAll);
// router.get('/', getDefault);
module.exports = router;

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getDefault(req, res, next) {
    res.send("This resource access is open!");
}
router.get('/:id', findOne);
module.exports = router;

function findOne (req , res, next) {
    userService.findOne({id :req.params.id})
        .then(users => res.json(users))
        .catch(err => next(err));}


router.post('/', createuser);
module.exports = router;

function createuser (req , res, next) {
    /*console.log(req.body);*/
    userService.create( req.body.username, req.body.password, req.body.firstName, req.body.lastName)
            .then(users => res.json(users))
            .catch(err => next(err));
        ;
    }
router.delete('/:id', _delete);
function _delete(req, res, next) {
    userService._delete(req.params.id)
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(next);}

router.get('/', getCurrent); 

function getCurrent(req, res, next) {
    if (req.session) {
        req.session.destroy();
      }
    }      
