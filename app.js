const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParser =  require('body-parser')
const path = require("path")
const web = require("./routes/web")

// Config
    // Body parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // Template Engine
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');
    app.set("views", "./views");

    // Public
    app.use(express.static(path.join(__dirname, "public")))

global.id_user = 1

app.use('', web)

PORT = 8081
app.listen(PORT, function () {
    console.log("Server running in address: http://localhost:" + PORT)
})