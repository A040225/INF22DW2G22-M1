const DataTypes = require("sequelize");


module.exports = function(connection) {
    const clientes = connection.define(
        "clientes",
        {
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            morada: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: "clientes"
        }
    );
    return clientes;
}