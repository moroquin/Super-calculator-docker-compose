const express = require('express');
const app = express();
const path = require('path');
//const axios = require('axios');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
//set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    res.render('index');
});

app.get('/faqs', (req, res) => {
    res.render('faqs');
});

app.get('/about', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/about.html'));
});

app.use( (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../views/404.html'));
    
});

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));

