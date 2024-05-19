const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(path.join(__dirname + '/views/partials'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index')
})
// dj wale babu


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});