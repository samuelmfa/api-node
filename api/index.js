const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

routes(app);

const port = 8082;
app.listen(port, () => { console.log('Serv porta: ' + port) });