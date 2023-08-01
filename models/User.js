const db = require('./db')

const User = db.sequelize.define('users', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "name is required" },
        },
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: { msg: "email is required" },
            isEmail: true
        },
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "password is required" },
        },
    }
})

module.exports = User