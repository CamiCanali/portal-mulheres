const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
var path = require('path');

// Register handlebars view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// Use Handlebars view engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/quizz', (req, res) => {
	res.render('quizz');
});

app.listen(4242, () => {
	console.log('Server is running in 4242');
});