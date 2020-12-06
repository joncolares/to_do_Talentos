const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./src/routes');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
app.use(routes);
app.use(express.json());

app.use((request, response, next)=>{
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, request, response, next)=>{
    response.status(error.status || 500);
    return response.send({
        erro:{
            mensagem: error.message
        }
    })
});

module.exports = app;