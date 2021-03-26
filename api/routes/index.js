const pessoas = require('./pessoasRoutes');

module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.status(200).json({ mensagem: 'API versão 1.0' });
    });

    app.use(pessoas);


}

