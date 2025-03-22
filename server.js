const express = require('express');
const FileSystem = require('fs');
const hbs = require('hbs');
const app = express();
const port = 3000;

// JSON data
const primary = JSON.parse(FileSystem.readFileSync('./data/primary.json'));

// Set the view engine to Handlebars
app.set('view engine', 'hbs');
app.set('views', './views');

// Register partials
hbs.registerPartials('./views/partials')

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
    res.render('index', primary);
});

// Handle form submission
app.get('/about', (req, res) => { 
    res.render('about', primary);
});

app.get('/translation', (req, res) => { 
    res.render('translation', primary);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});