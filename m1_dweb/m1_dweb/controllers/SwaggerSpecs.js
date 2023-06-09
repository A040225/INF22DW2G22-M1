const config =  require('./Config');
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: { 
      title: "BasicAuthentication",
      version: "1.0.0",
      description: "Basic Authentication",
      contact: { name: "Your name" },
    },
    servers: [ {url: "http://localhost:" + config.PORT,},],
    components: {
      securitySchemes: {
        basicAuth: { type: "http", scheme: "basic", },
      },
    },
    security: [{ basicAuth: [] }],
  };
  
const options = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"],
  };
  
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;