const router = require('express').Router();
const pendaftaranController = require('../controllers/pendaftaranController');

router.get('/', pendaftaranController.getAllPendaftaran);
router.get('/:id', pendaftaranController.getPendaftaranById);
router.post('/', pendaftaranController.createPendaftaran);
router.put('/:id', pendaftaranController.updatePendaftaran);
router.delete('/:id', pendaftaranController.deletePendaftaran);

module.exports = router;