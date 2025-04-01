const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//console.log('MongoDB URI:', process.env.MONGO_URI);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
