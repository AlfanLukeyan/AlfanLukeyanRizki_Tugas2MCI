const router = require('express').Router();
const pesertaController = require('../controllers/pesertaController');

router.get('/', pesertaController.getAllPeserta);
router.get('/:id', pesertaController.getPesertaById);
router.post('/', pesertaController.createPeserta);
router.put('/:id', pesertaController.updatePeserta);
router.delete('/:id', pesertaController.deletePeserta);

module.exports = router;