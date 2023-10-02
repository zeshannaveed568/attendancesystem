const express = require('express');
const app = express();


app.use(express.json());

// hello world route
app.get('/', (req, res) => {
    res.send('Hello World!');
});


module.exports = app;