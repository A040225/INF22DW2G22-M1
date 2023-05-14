const DataTypes = require("sequelize");

/*
    Como utilizar argumentos na utilização do require.
    https://stackoverflow.com/questions/13151693/passing-arguments-to-require-when-loading-module
*/
module.exports = function(connection) {
    const faturas = connection.define(
        "faturas",
        {
            descricao: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            /*clienteId: {
                type: DataTypes.INTEGER,  
                allowNull: false , 
            }*/

            
        },
        {
            /* https://sequelize.org/docs/v6/core-concepts/model-basics/#providing-the-table-name-directly */
            tableName: "faturas"
        }
    );
    return faturas;
}