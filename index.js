require('dotenv').config()

const http = require("http")

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({
    origin: 'http://localhost:4200'
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes/correoRoute'));


const PORT = process.env.PORT;
app.listen(process.env.PORT,function ()  {
    console.log("Aplicacion ejecutando en puerto:" + PORT);
});














//Bryan Josue Ortega Casillas