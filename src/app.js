const express = require("express")
const app = express()
const cors = require("cors")
const db = require('./models/repository')

db.connect()

app.use(cors())
app.use(express.json())

const index = require("./route/index")
const contatos = require("./route/index")

app.use("/", index)
app.use("/contatos", contatos)

module.exports = app