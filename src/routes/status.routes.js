import { Router } from 'express';
import { participantsControllers } from '../controllers/participants.controllers.js';

const statusRouter = Router();

statusRouter.post('/', participantsControllers.updateStatus);

export { statusRouter };