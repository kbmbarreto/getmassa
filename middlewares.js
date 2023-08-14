const bodyParser = require('body-parser');
const express =require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

module.exports = app => {
    app.set('port', 8005);
    app.set('json spaces', 4);
    app.use(helmet());
    app.use(cors({
        origin: ['http://localhost:4200'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowedHeaders: ['Content-Type']
    }));
    app.use(compression());
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
    app.use(express.static('public'));
};