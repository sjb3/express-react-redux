'use strict';

const express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Express App running')
});

