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

exports.getNote = async (req, res, next) => {
	try {
		const note = await Note.findById(req.params.id);
		if (!note) {
			const error = new Error('Not found!');
			error.statusCode = 404;
			throw error;
		}
		res.render('details.ejs', {
			note,
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

		const note = await new Note({ title, content });
		await note.save();
		res.redirect('/');
	} catch (e) {
		if (!e.statusCode) {
			e.statusCode = 500;
		}
		next(e);
	}
};

exports.getCreateNote = (req, res) => {
	res.render('create');
};

exports.deleteNote = async (req, res, next) => {
	const noteId = req.params.id;
	try {
		const note = await Note.findById(noteId);
		if (!note) {
			const error = new Error('Not found!');
			error.statusCode = 404;
			throw error;
		}
		await note.remove();
		res.redirect('/');
	} catch (e) {
		if (!e.statusCode) {
			e.statusCode = 500;
		}
		next(e);
	}
};
