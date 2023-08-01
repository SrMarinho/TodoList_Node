const User =  require('../models/User')

exports.add = (req, res) => {
    return User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(() => {
        return res.status(200).send([{code: 200, message: "User created"}])
    }).catch((error) => {
        return res.status(400).send({code: 400, errors: error.errors.map(({type, message}) => ({type, message}))})
    })
}