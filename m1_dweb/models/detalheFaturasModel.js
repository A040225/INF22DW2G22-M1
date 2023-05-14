const DataTypes = require("sequelize");

/*
    Como utilizar argumentos na utilização do require.
    https://stackoverflow.com/questions/13151693/passing-arguments-to-require-when-loading-module
*/
module.exports = function(connection) {
    const detalheFaturas = connection.define(
        "detalheFaturas",
        {
            quantidade: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                timestamps: false
            },
        },
        {
            /* https://sequelize.org/docs/v6/core-concepts/model-basics/#providing-the-table-name-directly */
            timestamps: false,
            tableName: "detalheFaturas"
        }
    );
    return detalheFaturas;
}