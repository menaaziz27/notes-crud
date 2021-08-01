const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const notesRoutes = require('./routes/note');
require('./utils/db');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

// ============ Routes ============
app.use(notesRoutes);

// handle errors
// app.use((error, req, res, next) => {
// 	console.log(error.message);
// 	if (!error.message) {
// 		error.message = 'Page Not Found';
// 	}
// 	res.render('404.ejs', {
// 		error: error.message,
// 		title: 'Error',
// 	});
// });

// app.use((req, res) => {
// 	if (!res.locals.error) {
// 		res.locals.error = 'This page is not found.';
// 	}
// 	res.render('404.ejs');
// });

app.listen(PORT, () => {
	`server is listening to port: ${PORT}`;
});
