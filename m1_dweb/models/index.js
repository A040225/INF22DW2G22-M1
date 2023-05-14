const Sequelize = require("sequelize");

/* 
    Ligação à base de dados
    https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database
 */
const connection = new Sequelize(
      'usersdb',
      'root',
      'secret',
      {
         host: 'mysql',
         dialect: 'mysql'
      }
   );

connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

const db = {};

db.connection = connection;
db.Sequelize = Sequelize;
db.op = Sequelize.Op;
db.user = require('./usersModel')(connection);
db.fatura = require('./faturasModel')(connection);
db.cliente = require('./clientesModel')(connection);
db.produto = require('./produtosModel')(connection);
db.detalheFatura = require('./detalheFaturasModel')(connection);

db.cliente.hasMany(db.fatura, {
   foreignKey:{
      name: 'clienteId',
      allowNull: false, 
      },}
)
db.fatura.belongsTo(db.cliente,{
   foreignKey:{
      name: 'clienteId',
      allowNull: false
      }}
);


db.fatura.belongsToMany(db.produto,  {through: {model : db.detalheFatura}, foreignKey: 'faturaId'});
db.produto.belongsToMany(db.fatura,  {through: {model : db.detalheFatura}, foreignKey: 'produtoId'});

module.exports = db;

