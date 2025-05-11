require ('dotenv').config()
const express = require ('express')
const chalk = require ('chalk')
const connectDB = require('./db/client')
const logger = require ('./middleware/logger')
const itemRoutes = require('./routes/stockRoute')
const authRoutes = require('./auth/routes/UserRoute')
const createAdmin = require('./auth/middlewares/CreateAdmin')

const app = express();
app.use(express.json());


//middlewares
app.use(logger)

app.get('/', (req, res)=>{
    res.end('Hola Mundo Node')
})

//Conexion a la base de datos
connectDB();
createAdmin();

//Rutas 
app.use('/api', itemRoutes)
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT
const IP = process.env.IP

app.listen(PORT, IP, ()=>{
    try{
        console.log(chalk.green('🔌...Iniciando el servidor...🔌'));
        console.log(chalk.blue(`✅ Servidor iniciado en http://${IP}:${PORT}`))
        console.log(chalk.gray('🛑 Para parar el servidor pulse ctrl + c'));
    }catch(error){
        console.log(chalk.red('❌ Error al iniciar el servidor'), error);
        process.exit(1)
    }
})