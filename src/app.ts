import express from 'express';
import bodyParser from 'body-parser';
import tutorRoutes from './routes/tutorRoute';
import petRoutes from './routes/petRoute';
import mongoose from 'mongoose';

const app = express();


app.use(bodyParser.json());

// MongoDB Configuration
mongoose.connect('mongodb://localhost:27017/veterinary');


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
