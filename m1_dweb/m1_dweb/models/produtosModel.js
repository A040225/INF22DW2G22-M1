const DataTypes = require("sequelize");


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