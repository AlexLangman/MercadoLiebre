const express = require('express');
const app = express();
const path = require('path');

//Path para documentos estaticos
app.use(express.static(path.resolve(__dirname,'./public')));
//Levantamos el servidor
app.listen(3000,()=>{console.log('Servidor corriendo en el puerto 3000')});

//Views
app.get('/',(req,res)=>{res.sendFile(path.resolve(__dirname,'./views/home.html'))})
