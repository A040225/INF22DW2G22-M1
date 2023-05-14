
const models = require("../models");

const userModel = models.user;
const op = models.op;

module.exports = {
    authenticate,
    getAll,
    findOne,
    create,
    _delete
};

async function authenticate({ username, password }) {
    const condition = {
        [op.and]: [
            { username: { [op.eq]: `${username}` } },
            { password: { [op.eq]: `${password}` } }
        ]
    };
    return userModel.findAll({where: condition})
    .then((users) => {
        console.log("Users recordset: ", users);
        if (users != 0) return true ;
        return false;
    })
}

async function getAll() {
    return userModel.findAll( );
}

async function findOne({id})  {
    const user = await userModel.findByPk(id);
    if (!user) {return ('User not found')}
    else 
    {return user}; 
    }

/*async function create(username, password, firstName, lastName)  {
        return userModel.create({username: `${username}`,password: `${password}`,firstName: `${firstName}`,lastName: `${lastName}`})    
        }*/       
async function create(username, password, firstName, lastName) {
    const findUser = await userModel.findOne({ where: { username } }).catch((err) => {
    console.log(err);
        });
        if (!findUser) {
            return userModel.create({username: `${username}`,password: `${password}`,firstName: `${firstName}`,lastName: `${lastName}`})
        } else 
       {
            return (`o utilizador ${username} ja existe`);
        }
        }
        
async function _delete(id) {
    const user = await userModel.findByPk(id);
    return user.destroy();
    }



         /* async function createUser(userData) {
            console.log(userData);
          
            const email = userData.email;
            const findUser = await User.findOne({ where: { email } }).catch((err) => {
              console.log(err);
            });
            if (!findUser) {
              User.create(userData)
          
                .then((user) => {
                  console.log(user);
                })
          
                .catch((err) => {
                  console.log(err);
                });
            }
          }*/