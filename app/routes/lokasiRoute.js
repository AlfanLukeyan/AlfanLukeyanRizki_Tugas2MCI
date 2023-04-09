const router = require('express').Router();
const lokasiController = require('../controllers/lokasiController');

router.get('/', lokasiController.getAllLokasi);
router.get('/:id', lokasiController.getLokasiById);
router.post('/', lokasiController.createLokasi);
router.put('/:id', lokasiController.updateLokasi);
router.delete('/:id', lokasiController.deleteLokasi);

module.exports = router;