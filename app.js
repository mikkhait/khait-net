const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: '🇺🇦 Michael Khait - Teams / Software / Design'
    })
})

app.listen(port, () => console.log(`Running on http://localhost:${port}`));