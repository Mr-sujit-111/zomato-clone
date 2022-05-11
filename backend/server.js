const express = require("express");
const bodyParser = require('body-parser');
const Email = require('./Routes/email.js');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = 8080;

app.use('/email', Email);


app.listen(port, () => {
    console.log(`app start at port ${port}`)
})