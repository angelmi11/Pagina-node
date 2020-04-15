// definicion de  entorno de desarrollo produc o devepe
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const hbs = require('express-handlebars');
const multer = require('multer');
const {
    roters
} = require('./routes/routes-index');
const path = require('path');
const morgan = require('morgan')
const cors = require('cors')

//inicializaciones del servidpor y db
const app = express();
const mongoose = require('./db');




// configuracion
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
/*app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}))
app.set('view engine','.hbs');*/

//middlewards
app.use(morgan('dev'));

const storage = multer.diskStorage({ //subir imganes 
    destination: path.join(__dirname, 'public/uploads'), // crear carpeta en publick
    filename: (req, file, callback) => {
        callback(null, new Date().getTime() + path.extname(file.originalname));
    } //genera un nombre aletorio de la img a la hora subir

})

app.use(multer({storage}).single('image'))
app.use(express.urlencoded({
    extended: false
})) //interpreta el formulario  en json
app.use(express.json());
app.use(cors());
// rutas 

app.use('/api/libros', roters)






app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})