const {Schema,model} = require('mongoose');

const SchemaLibros = new Schema({

    titulo:{type:String, require:true},
    autor:{type:String, require:true},
    isbn:{type:String, require:true},
    imgPath:{type:String, require:true},
    fechaCreado:{type:Date, default:Date.now}
})



module.exports= model('libro',SchemaLibros)