const express = require('express'); //Importar express 
const { mongo } = require('mongoose');
const routes = require('./routes'); //Importar carpeta routes
const mongoose = require('mongoose'); //Importar mongoose
const bodyParser = require('body-parser'); //Libreria para acceder al body de las peticiones 
const path = require('path');//Libreria para leer los archivos que existen en las carpetas


//Conexion con BD Mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/api', {

    useNewUrlParser: true

});


//Crear la app
const app = express();

//Habilitar pug
app.set('view engine', 'pug');

//carpeta de vistas 
app.set('views', path.join(__dirname, './views'));






//habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas de la app
app.use('/', routes());


//Configurar puerto
app.listen(8000);

