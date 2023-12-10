import express from 'express';
import "express-async-errors"; 
import cors from 'cors';
import { handleErrors } from './middlewares/handleErrors.middleware.js';
import { participantsRouter } from './routes/participants.routes.js';
import { messagesRouter } from './routes/messages.routes.js';
import { statusRouter } from './routes/status.routes.js';
import { participantsControllers } from './controllers/participants.controllers.js';

import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use('/participants', participantsRouter);
app.use('/messages', messagesRouter);
app.use('/status', statusRouter);
app.use(handleErrors);

setInterval(participantsControllers.removeOfflineUsers, 15000);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`));