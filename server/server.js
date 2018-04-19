//Get request - get data from server
//Post request - post something to the server
//whatever we send back as data on post is req.body on server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const recordCollection = require('./modules/record-collection');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.get('/records', (req, res) => {
    res.send(recordCollection);
});

app.post('/add-record', (req, res) => {
    console.log(req.body);
    recordCollection.push(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});