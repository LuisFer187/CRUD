const express = require("express");
const mysql = require("mysql");
const path = require("path");
const morgan = require("morgan");
const mycon = require('express-myconnection');
//Inicializamos esto
const app = express();
//Puertos para cuando hagamos deploy
const port = process.env.PORT || 3000;

//Estableciendo como ejs como view engine
app.set('view engine', 'ejs');
//Estableciendo el directorio
app.set('views', path.join(__dirname, 'views'));

//Para ver las peticiones
app.use(morgan('dev'));
app.use(mycon(mysql, {
    host: "localhost",
    user: "root",
    password: "n0m3l0",
    port: 3306,
    database: "nodeimg" 
}, 'single')); 

//Para iniciar el server
app.listen(port, ()=>{
    console.log('Servidor funcionando en puerto: ', port);
});




