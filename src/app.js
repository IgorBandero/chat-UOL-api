import express from 'express';
import "express-async-errors"; 
import cors from 'cors';
import { handleErrors } from './middlewares/handleErrors.middleware.js';
import { participantsRouter } from './Routes/participants.routes.js';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use('/participants', participantsRouter);

app.use(handleErrors);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`));