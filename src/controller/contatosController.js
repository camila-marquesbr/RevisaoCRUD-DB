const { response } = require("../app")
const contatoCollections = require("../models/contatoSchema")
const getAll =(request, response) =>{
    console.log(request.url)
    contatoCollection.find((error, contatos)=>{
        if(error){
            return response.satus(500).send(error)
        }else{
            return response.status(200).json({
                mensagem:"Tudo certo",
                contatos
            })
        }
    })
}

const addContato = (request, response)=>{
    const contatoDoBody = request.body
    const contato = new contatoCollection(contatoDoBody)

    contato.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso",
                contato
            })
        }
    })
}

module.exports = {
    getAll
}