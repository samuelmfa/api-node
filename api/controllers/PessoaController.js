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
            const pessoa = await database.Pessoas.findOne({ where: { id } });
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

    //matriculas
    static async findMatricula(req, res) {
        try {
            const { estudanteId, matriculaId } = req.params;

            const matricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } });

            return res.status(200).json(matricula);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async createMatricula(req, res) {
        try {
            const { estudanteId } = req.params;
            const novaMatricula = { ...req.body, estudante_id: estudanteId };
            const matricula = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(matricula);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async updateMatricula(req, res) {
        try {
            const { matriculaId } = req.params;
            const atualizaMatricula = req.body;
            await database.Matriculas.update(atualizaMatricula, { where: { id: matriculaId } });
            const matricula = await database.Matriculas.findOne({ where: { id: matriculaId } });
            return res.status(200).json(matricula);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async deleteMatricula(req, res) {
        try {
            const { matriculaId } = req.params;
            const matricula = await database.Matriculas.findOne({ where: { id: matriculaId } });
            await database.Matriculas.destroy({ where: { id: Number(matriculaId) } });
            return res.status(200).json(matricula);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }



}

module.exports = PessoaController;