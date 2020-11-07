const mongoose = require("mongoose")

const DB_URL = "mongodb://localhost:27017/Repeograma"

const connect = ()=>{
    mongoose.connect(DB_URL, {useNewUrlParser: true})
    const connection = mongoose.connection

    connection.on('error', () => console.error('Erro ao se conectar'))
    connection.once('open', () => console.log('Conectamos no Mongo'))
}

module.exports = {connect}

//arquivo Repository CRIA a Conexão com nossa Banco de Dados, nesse caso o MongoDB