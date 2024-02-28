import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/RiskOwnerRoutes.js';

dotenv.config(); //* Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

//* Add CORS middleware
app.use(cors());

app.use(express.json());

//* Mount user routes
app.use('/users', userRoutes);

//* Mount RiskOwner routes
app.use('/RiskOwner', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
