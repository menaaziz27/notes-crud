const Note = require('../models/Note');
const { validationResult } = require('express-validator');
exports.getNotes = async (req, res, next) => {
	try {
		const notes = await Note.find({});
		res.send(200).json(notes);
	} catch (e) {
		if (!e.statusCode) {
			e.statusCode = 500;
		}
		next(e);
	}
};

exports.createNote = async (req, res, next) => {
	const { title, content } = req.body;
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
	}
};
