const database = require('../models');

class PessoaController {

    static async findAll(req, res) {
        try {
            const listaPessoas = await database.Pessoas.findAll();
            return res.status(200).json(listaPessoas);

        } catch (e) {
            return res.status(500).json(e.message)
        }

    }
}

module.exports = PessoaController;