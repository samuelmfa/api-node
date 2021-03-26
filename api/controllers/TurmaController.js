const database = require('../models');

class TurmaController {

    static async findAll(req, res) {
        try {
            const listaTurmas = await database.Turmas.findAll();
            return res.status(200).json(listaTurmas);

        } catch (e) {
            return res.status(500).json(e.message)
        }

    }

    static async findById(req, res) {
        try {
            const { id } = req.params;

            const Turma = await database.Turmas.findOne({ where: { id: Number(id) }});
            return res.status(200).json(Turma);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async create(req, res) {
        try {
            const novaTurma = req.body;
            const Turma = await database.Turmas.create(novaTurma);
            return res.status(200).json(Turma);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const atualizarTurma = req.body;
            await database.Turmas.update(atualizarTurma, { where: { id } });
            const Turma = await database.Turmas.findOne({where: { id }});
            return res.status(200).json(Turma);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await database.Turmas.destroy({ where: { id: Number(id) } });
            return res.status(200).json();

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
}

module.exports = TurmaController;