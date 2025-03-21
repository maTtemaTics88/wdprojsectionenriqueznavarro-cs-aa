const express = require('express');
const FileSystem = require('fs');
const hbs = require('hbs');
const app = express();
const port = 3000;

// JSON data
const data = JSON.parse(FileSystem.readFileSync('data.json'));

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
  res.render('index', data);
});

// Handle form submission
app.get('/about', (req, res) => { 
  res.render('about', data);
});

app.get('/translation', (req, res) => { 
  res.render('translation', data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});