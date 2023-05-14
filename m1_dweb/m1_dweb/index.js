const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const config = require('./controllers/Config');
const auth = require("./controllers/BasicSecurity");
const models = require("./models");
const routes = require("./routes");
const swaggerSpec = require("./controllers/SwaggerSpecs");
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());

console.log(`NODE_ENV=${config.NODE_ENV}`);

// api routes
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/users", routes.users);
app.use("/secured", auth, routes.secured);
app.use("/faturas", auth, routes.faturas);
app.use("/clientes", auth,routes.clientes);
app.use("/detalheFaturas", auth, routes.detalheFaturas);
app.use("/produtos", routes.produtos);

/* 
    Para recriarmos a tabela e criarmos novos utilizadores. 
    https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization    
*/
/*considerando que se faz a criaçao via o ficheiro database_v1.sql ja nao é necessario efectuar  o sync */

/*models.connection.sync({ force: true })
  .then(() =>  { 
      models.user.create({
      username: 'basicUser',
      password: 'basicPassword',
      firstName: 'Basic',
      lastName: 'User'
    });
    models.user.create({
      username: 'test',
      password: 'test',
      firstName: 'Test',
      lastName: 'User'
    });
    models.cliente.create({
      nome: 'Manuel',
      morada: 'porto'
    });
    models.produto.create({
      nome: 'macas',
      preco: 15,
    });
  })
  .then(() =>{
    models.fatura.create({
      descricao: 'porto',
      clienteId : 1,
    })
    .then(() =>{
      models.detalheFatura.create({
      quantidade : 5,
      faturaId : 1,
      produtoId: 1}) 
      });
  })*/
  


// start server
app.listen(config.PORT, function () {
  console.log(`app running on ${config.HOST}:${config.PORT}`);
});