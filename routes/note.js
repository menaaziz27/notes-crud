const router = require('express').Router();

const {
	getNotes,
	createNote,
	getCreateNote,
	getNote,
	deleteNote,
	updateNote,
} = require('../controllers/noteController');

router.put('/notes/:id', updateNote);
router.get('/', getNotes);
router.get('/notes/:id', getNote);
router.get('/create', getCreateNote);
router.post('/', createNote);
router.post('/notes/:id', deleteNote);

module.exports = router;
