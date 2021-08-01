const router = require('express').Router();

const {
	getNotes,
	createNote,
	getCreateNote,
	getNote,
	deleteNote,
} = require('../controllers/noteController');

router.get('/', getNotes);
router.get('/create', getCreateNote);
router.get('/notes/:id', getNote);
router.post('/', createNote);
router.post('/notes/:id', deleteNote);

module.exports = router;
