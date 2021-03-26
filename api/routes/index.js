
const pessoas = require('./pessoasRoutes')
const niveis = require('./niveisRoutes')
const turmas = require('./turmasRoutes')

module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.status(200).json({ mensagem: 'API versão 1.0' });
    });

    app.use(
        pessoas,
        niveis,
        turmas
    );


}

