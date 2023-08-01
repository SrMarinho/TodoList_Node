const db = require('./db')

const Task = db.sequelize.define('tasks', {
    id_user: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "id_user is required"
            },
        },
    },
    title: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "title is required"
            },
        },
    },
    content: {
        type: db.Sequelize.TEXT,
    },
    time: {
        type: db.Sequelize.DATE,
    }
})

module.exports = Task