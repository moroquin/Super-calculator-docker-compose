const express = require('express');
const app = express();
const path = require('path');

const apiRoutes = require('./routes/apiroutes');
const loginRoutes = require('./routes/loginroutes');

app.use(express.json());
//app.use(express.urlencoded());



app.use('/auth/', loginRoutes);
app.use('/', apiRoutes);


app.listen(3001, () => console.log('escuchando en el puerto 3001'));