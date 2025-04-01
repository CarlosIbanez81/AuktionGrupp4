const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors');
const AuctionRoutes = require('./routes/AuctionRoutes')
// const BidRoutes = require('./routes/BidRoutes')




connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auctions', AuctionRoutes)
// app.use('/api/bid', BidRoutes)


app.get('/', (req, res) => {
    res.send('Server is running!');
});


// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});



module.exports = app;



