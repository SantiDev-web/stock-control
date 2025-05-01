const stock = require('../models/StockModel')
const chalk = require('chalk')

const CreatenewItem = async (req, res)=>{
    const {nombre, categoria, cantidad, ubicacion, estado, descripcion} = req.body

    try{
        const existingItem = await stock.findOne({nombre})

        if(existingItem){
            return res.status(400).json({message: 'El Item ya existe!'})
        }

        const newItem = new stock({nombre, categoria, cantidad, ubicacion, estado, descripcion});

        const savedItem = await newItem.save();

        res.status(201).json(savedItem);
        console.log(chalk.yellow('Item Creado Con Exito'))

    }catch(error){

        res.status(500).json({message: 'Error Al guardar el Item', error: error.message})

    }
};

const getAllItems = async (req, res) =>{
    try{
        const stocks = await stock.find();

        if (stocks.length === 0){
            return res.status(404).json({message: 'No Se Encontro Stock'})
        }

        res.status(200).json({stocks});
        console.log(chalk.bgWhiteBright('Stock Obtenido Con Exito', stocks));

    }catch(error){

        res.status(500).json({message: 'Error Al Obtener Los Items', error: error.message});
        console.log(chalk.red('Error Al Obtener Todos Los Items', error.message));

    }
};

const getItemByID = async (req, res) =>{
    try{
        const item = await stock.findById(req.params.id);

        if(!item){
            return res.status(404).json({error:'Item no encontrado'})
        }

        res.json(item)

    }catch (error){

        res.status(500).json({error: 'Error Al Obtener El Item', error: error.message})
        console.log(chalk.red('Error al obtener el item', error.message))

    }
};

const updateItem = async (req, res) =>{
    try{
        const {id} = req.params;
        const dataUpdate = req.body;

        const updatedItem = await stock.findByIdAndUpdate(id, dataUpdate, {new: true, runValidators: true,});

        if(!updatedItem){
            return res.status(404).json({error: 'Item No Encontrado'});
        }
        res.json(updatedItem);

    }catch(error){

        res.status(500).json({error: 'Error al actualizar el Item seleccionado', error: error.message});
        console.log(chalk.red('Error al actualizar el Item seleccionado', error.message))

    }
};

const deleteItem = async (req, res) =>{
    try{
        const {id} = req.params;
        const deleteItem = await stock.findByIdAndDelete(id);

        if(!deleteItem){
            return res.status(404).json({error: 'Item no encontrado'});
        }
        res.json({message: 'Item Eliminado Correctamente', item: deleteItem})
    }catch (error){

        res.status(500).json({error: 'Error al eliminar el Item seleccionado', error: error.message});
        console.log(chalk.red('Error al eliminar el Item seleccionado', error.message))

    }
}

module.exports = {
    CreatenewItem,
    getAllItems,
    getItemByID,
    updateItem,
    deleteItem,
}