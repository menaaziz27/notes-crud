const Note = require('../models/Note');
const { validationResult } = require('express-validator');
exports.getNotes = async (req, res, next) => {
	try {
		const notes = await Note.find({});
		res.render('home.ejs', {
			notes,
		});
	} catch (e) {
		if (!e.statusCode) {
			e.statusCode = 500;
		}
		next(e);
	}
};

exports.createNote = async (req, res, next) => {
	try {
		const { title, content } = req.body;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			let error = new Error('validation error');
			error.statusCode = 422;
			throw error;
		}
	} catch (e) {
		if (!e.statusCode) {
			e.statusCode = 500;
		}
		next(e);
	}
};
