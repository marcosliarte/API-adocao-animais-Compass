import express from 'express';
import bodyParser from 'body-parser';
import tutorRoutes from './routes/tutorRoutes';
import petRoutes from './routes/petRoutes';
import mongoose from 'mongoose';

const app = express();

// Middlewares
app.use(bodyParser.json());

// MongoDB Configuration
mongoose.connect('mongodb://localhost:27017/veterinary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use(tutorRoutes);
app.use(petRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
