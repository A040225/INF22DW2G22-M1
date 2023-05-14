const DataTypes = require("sequelize");

/*
    Como utilizar argumentos na utilização do require.
    https://stackoverflow.com/questions/13151693/passing-arguments-to-require-when-loading-module
*/
module.exports = function(connection) {
    const produtos = connection.define(
        "produtos",
        {
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            preco: {
                type: DataTypes.DECIMAL(),
                allowNull: false
            }
        },
        {
            /* para forçar  o nome da tabela*/
            tableName: "produtos"
        }
    );
    return produtos;
}