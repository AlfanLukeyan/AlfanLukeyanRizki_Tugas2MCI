const router = require('express').Router();
const seminarController = require('../controllers/seminarController');

router.get('/', seminarController.getAllSeminar);
router.get('/:id', seminarController.getSeminarById);
router.post('/', seminarController.createSeminar);
router.put('/:id', seminarController.updateSeminar);
router.delete('/:id', seminarController.deleteSeminar);

module.exports = router;