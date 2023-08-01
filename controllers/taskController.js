const Task =  require('../models/Task')

exports.add = async (req, res) => {
    Task.create({
        id_user: 1,
        title: req.body.title,
        content: req.body.content,
        time: req.body.time
    }).then(() => {
        return res.status(200).json([{code: 200, message: "Task created"}])
    }).catch((error) => {
        console.log(error);
        return res.status(400).json({code: 400, message: "Erro ao inserir task"})
    })
}

exports.delete = async (req, res) => {
    Task.destroy({
        where: {
            id: req.query.id
        },
    }).then(() => {
        return res.status(200).json({code:200, message: "Excluido com sucesso!"})
    }).catch((err) => {
        console.log(err);
        return res.status(400).json({code:200, message: "Erro ao excluir task!"})
    })
}

exports.update = async (req, res) => {

    console.log(
        {
            title: req.body.title,
            content: req.body.content,
            time: req.body.time,
        }
    );

    Task.update(
        {
            title: req.body.title,
            content: req.body.content,
            time: req.body.time,
        },
        {
            where: {
                id: req.body.id
            },
        }
    ).then(() => {
        return res.status(200).json({code:200, message: "Alterado com sucesso!"})
    }).catch((err) => {
        console.log(err);
        return res.status(400).json({code:200, message: "Erro ao alterar task!"})
    })
}

exports.get = async (req, res) => {
    return res.json(await Task.findOne({raw: true, where: { id:  req.query.id }}))
}

exports.getAll = async (req, res) => {
    return res.json({
        tasks: await Task.findAll({raw: true, where: { id_user:  1 }})
    })
}