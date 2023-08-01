const Sequelize = require("sequelize")

//Conexão banco de dados
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/nodeDB')


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}