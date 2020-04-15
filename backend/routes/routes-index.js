const express = require('express');
const  roters = express.Router();

const libro =require('../models//libro-models');// envie el modelo scremalibros

roters.get('/',async (req,res)=>{
   const libros =  await libro.find();//busca los libros en la db
    res.json(libros)
});

roters.post('/', async (req,res)=>{
    const {titulo,autor, isbn} =req.body;// recibe los datos por post o form
    const imagePath = '/uploads/'+req.file.filename;
    const newLibro = new libro ({titulo,autor,isbn,imagePath}) // crear el nuevo objeto libro 
  
   await newLibro.save();// guarda el nuevo libro
    res.json({
        message: 'Nuevo libro creado :)'
    })
});


roters.delete('/:id', async (req,res)=>{
   await libro.findByIdAndDelete(req.params.id);// eliminar por id 
   res.json({
       message:'Libro Eliminado'
   })
})


module.exports= {
    roters
};