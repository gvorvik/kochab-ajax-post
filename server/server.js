const express = require('express');
const app = express();
const PORT = 5000;

const recordCollection = require('./modules/record-collection');

app.use(express.static('server/public'));

//routes
app.get('/records', (req, res) => {
    res.send(recordCollection);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});