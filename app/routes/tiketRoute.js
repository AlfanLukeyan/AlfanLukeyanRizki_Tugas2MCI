const router = require('express').Router();
const tiketController = require('../controllers/tiketController');

router.get('/', tiketController.getAllTiket);
router.get('/:id', tiketController.getTiketById);
router.post('/', tiketController.createTiket);
router.put('/:id', tiketController.updateTiket);
router.delete('/:id', tiketController.deleteTiket);

module.exports = router;