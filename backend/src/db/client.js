require ('dotenv').config
const mongoose = require('mongoose')
const chalk = require('chalk')

const mongo_URI = process.env.mongo_URI

const connectDB = async ()=>{
    try{
        console.log(chalk.blue('🔌Conectando a la Base de datos...🔌'))
        await mongoose.connect(mongo_URI,{dbName: 'stockdatabase'})
        console.log(chalk.green('✅ Conectado a la base de datos'))
    }catch(error){
        console.error(chalk.red('❌ Error al conectar con la base de datos'))
    }
}

module.exports = connectDB;