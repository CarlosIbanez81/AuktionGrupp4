const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()
const cors = require('cors');


connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running!');
});


module.exports = app;
