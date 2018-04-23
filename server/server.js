//Get request - get data from server
//Post request - post something to the server
//whatever we send back as data on post is req.body on server

const express = require('express');
const bodyParser = require('body-parser');

const recordRouter = require('./routes/record.route'); 

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/record', recordRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});