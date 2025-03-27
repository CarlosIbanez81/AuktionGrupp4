const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors');
//const AuctionRoutes = require('./routes/AuctionRoutes')
//const BidRoutes = require('./routes/BidRoutes')



connectDB();

const app = express();
app.use(express.json());
app.use(cors());

//app.use('/api/auktion', AuctionRoutes)
//app.use('/api/bid', BidRoutes)

app.get('/', (req, res) => {
    res.send('Server is running!');
});


module.exports = app;



