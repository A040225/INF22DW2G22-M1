const DataTypes = require("sequelize");


module.exports = function(connection) {
    const users = connection.define(
        "users",
        {
            
            username: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            firstName: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: "users"
        }
    );
    return users;
}