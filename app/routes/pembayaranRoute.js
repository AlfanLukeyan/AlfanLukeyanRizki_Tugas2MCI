const router = require('express').Router();
const pembayaranController = require('../controllers/pembayaranController');

router.get('/', pembayaranController.getAllPembayaran);
router.get('/:id', pembayaranController.getPembayaranById);
router.post('/', pembayaranController.createPembayaran);
router.put('/:id', pembayaranController.updatePembayaran);
router.delete('/:id', pembayaranController.deletePembayaran);
router.get('/berhasil', pembayaranController.getPembayaranBerhasil);
router.get('/gagal', pembayaranController.getPembayaranGagal);

module.exports = router;