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

    static async findById(req, res) {
        try {
            const { id } = req.params;

            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) }, attributes: ['nome', 'email'] });
            return res.status(200).json(pessoa);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async create(req, res) {
        try {
            const novaPessoa = req.body;
            const pessoa = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(pessoa);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const atualizarPessoa = req.body;
            await database.Pessoas.update(atualizarPessoa, { where: { id } });
            const pessoa = await database.Pessoas.findOne({where: { id }});
            return res.status(200).json(pessoa);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await database.Pessoas.destroy({ where: { id: Number(id) } });
            return res.status(200).json();

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

}

module.exports = PessoaController;