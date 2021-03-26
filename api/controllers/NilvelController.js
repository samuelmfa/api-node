const database = require('../models');

class NivelController {

    static async findAll(req, res) {
        try {
            const listaNiveis = await database.Niveis.findAll();
            return res.status(200).json(listaNiveis);

        } catch (e) {
            return res.status(500).json(e.message)
        }

    }

    static async findById(req, res) {
        try {
            const { id } = req.params;

            const Nivel = await database.Niveis.findOne({ where: { id: Number(id) }});
            return res.status(200).json(Nivel);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async create(req, res) {
        try {
            const novaNivel = req.body;
            const Nivel = await database.Niveis.create(novaNivel);
            return res.status(200).json(Nivel);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const atualizarNivel = req.body;
            await database.Niveis.update(atualizarNivel, { where: { id } });
            const Nivel = await database.Niveis.findOne({where: { id }});
            return res.status(200).json(Nivel);

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await database.Niveis.destroy({ where: { id: Number(id) } });
            return res.status(200).json();

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
}

module.exports =  NivelController;