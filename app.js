const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello World',
        message: 'Hello world'
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));