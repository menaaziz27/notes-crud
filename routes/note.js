const router = require('express').Router();

const { getNotes } = require('../controllers/noteController');

router.get('/', getNotes);

module.exports = router;
