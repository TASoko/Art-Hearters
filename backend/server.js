const connectDB = require('./config/db');
const app = require('./app');

// connect to mongo db
connectDB();

const PORT = process.env.PORT || 5000

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/limitless-cliffs-88318",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);



// Start the server
app.listen(PORT, () => console.log(`Server started at ${PORT}`))