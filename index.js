require('dotenv').config()
console.log(process.env.PORT);
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Hello World!`);
});

app.get('/twitter', (req, res) => {
    res.send('theatulgupta')
});

app.get('/login', (req, res) => {
    res.send('<h1>Please login at Chai aur Code</h1>')
});

app.get('/chai', (req, res) => {
    res.send('<h2>Hello Guyzz, Chai Pee Lo!</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Starting server on port ${process.env.PORT}`);
});