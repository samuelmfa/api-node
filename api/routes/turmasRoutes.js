const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()
router.get('/turmas', TurmaController.findAll);
router.get('/turmas/:id', TurmaController.findById);
router.post('/turmas', TurmaController.create);
router.put('/turmas/:id', TurmaController.update);
router.delete('/turmas/:id', TurmaController.delete);

module.exports = router