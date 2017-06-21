'use strict';

const express = require('express');
var path = require('path');

var app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});

app.listen(9081, () => {
    console.log('Express App running')
});

