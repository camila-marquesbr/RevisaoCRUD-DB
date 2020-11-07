const express = require("express")
const { response } = require("../app")
const router = express.Router()

router.get("/", function(request, reponse){
    response.status(200).send({
        titulo:"Agenda de contatinhos - Reprograma",
        Version: "1.0.0"
    })
})

module.exports = router