const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.findAll);
router.get('/pessoas/:id', PessoaController.findById);
router.post('/pessoas', PessoaController.create);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.delete);

//Rotas Matriculas
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.findMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula);
router.put('/pessoas/matricula/:matriculaId', PessoaController.updateMatricula);
router.delete('/pessoas/matricula/:matriculaId', PessoaController.deleteMatricula);
module.exports = router;


