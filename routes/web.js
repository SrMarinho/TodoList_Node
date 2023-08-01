const express = require("express")
const router = express.Router()
const bodyParser =  require('body-parser')
const userController = require('../controllers/userController')
const taskController = require('../controllers/taskController')
const axios = require("axios")

router.get("/", function (req, res){
    axios.get('http://localhost:8081/task/getAll').then((response) => {
        res.render("index", response.data)
    }).catch(() => {
        res.render("index")
    })
})

router.get("/task/add", (req, res) => {
    return res.render('addTask') 
})

router.post("/task/add", taskController.add)

router.post("/task/add_form", (req, res) => {
    axios.post('http://localhost:8081/task/add', {
        title: req.body.title,
        content: req.body.content,
        time: req.body.time,
    }).then((response) => {
        res.render("addTask", {message: "Tarefa adicionada"})
    }).catch((err) => {
        res.render("addTask", {message: "Erro ao adicionar tarefa"})
    })
})

router.delete("/task/delete", taskController.delete)

router.post("/task/delete_form", (req, res) => {
    axios.delete('http://localhost:8081/task/delete', {
        params: {
            id: req.body.id
        }
    }).then((response) => {
        res.redirect("/", 200, {message: "Excluído com sucesso!"})
    }).catch((err) => {
        res.redirect("/", 400, {message: "Erro ao excluír tarefa"})
    })
})

router.get("/task/getAll", taskController.getAll)

router.get("/task/get", taskController.get)

router.get("/task/edit", function (req, res){
    axios.get('http://localhost:8081/task/get', {
        params: {
            id: req.query.id
        }
    }).then((response) => {
        res.render("edit", response.data)
    }).catch(() => {
        res.render("edit")
    })
})

router.post("/task/edit_form", (req, res) => {
    axios.put('http://localhost:8081/task/update', {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content,
        time: req.body.time
    }).then((response) => {
        res.redirect("/", 200, {message: "Excluído com sucesso!"})
    }).catch((err) => {
        res.redirect("/", 400, {message: "Erro ao excluír tarefa"})
    })
})

router.put("/task/update", taskController.update)

router.post("/user/add", userController.add)

module.exports = router