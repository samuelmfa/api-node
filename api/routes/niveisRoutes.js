const { Router } = require('express')
const NivelController = require('../controllers/NilvelController')

const router = Router()

router.get('/niveis', NivelController.findAll);
router.get('/niveis/:id', NivelController.findById);
router.post('/niveis', NivelController.create);
router.put('/niveis/:id', NivelController.update);
router.delete('/niveis/:id', NivelController.delete);

module.exports = router