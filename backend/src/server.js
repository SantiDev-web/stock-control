require ('dotenv').config()
const express = require ('express')
const chalk = require ('chalk')
const connectDB = require('./db/client')
const logger = require ('./middleware/logger')
const itemRoutes = require('./routes/stockRoute')

const app = express();
app.use(express.json());


//middlewares
app.use(logger)

app.get('/', (req, res)=>{
    res.end('Hola Mundo Node')
})

//Conexion a la base de datos
connectDB();

//Rutas 
app.use('/api', itemRoutes)

const PORT = process.env.PORT
const IP = process.env.IP

app.listen(PORT, IP, ()=>{
    try{
        console.log(chalk.green('🔌...Iniciando el servidor...🔌'));
        console.log(chalk.blue(`✅ Servidor iniciado en ${IP}:${PORT}`))
    }catch(error){
        console.log(chalk.red('❌ Error al iniciar el servidor'), error);
        process.exit(1)
    }
})