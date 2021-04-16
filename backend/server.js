const connectDB = require('./config/db');
const app = require('./app');

// connect to mongo db
connectDB();

const PORT = process.env.PORT || 5000


// Start the server
app.listen(PORT, () => console.log(`Server started at ${PORT}`))