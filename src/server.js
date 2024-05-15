const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('will run before any route');
    next(new Error('failed!'));
});

app.use((err, req, res, next) => {
    console.log('something goes wrong');
    res.status(500).send(err.message);
});

app.get('/', function(req, res, next) {
        console.log('route / called');
    res.send('Hello World!');
});

app.listen(3000, () => {
        console.log('app is running');
});


