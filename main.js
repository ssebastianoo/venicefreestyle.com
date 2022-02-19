const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.redirect('https://www.instagram.com/venice_freestyle/');
});

app.listen(2030);