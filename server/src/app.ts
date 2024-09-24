import express from 'express';
import bookingRoutes from './routes/bookingRoutes';
import cors from 'cors';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);

export default app;
