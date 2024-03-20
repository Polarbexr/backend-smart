const express = require('express');
const app = express();

let envio = require('../controlers/correoControler');

app.post('/envio',envio.envioCorreo);
module.exports = app;