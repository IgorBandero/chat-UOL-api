import { Router } from 'express';
import { validateSchema } from '../middlewares/validation.middleware.js';
import { participantSchema } from '../schemas/participants.schema.js';
import { participantsControllers } from '../controllers/participants.controllers.js';

const participantsRouter = Router();

participantsRouter.post('/', validateSchema(participantSchema), participantsControllers.createParticipant);
participantsRouter.get('/', participantsControllers.getParticipants);

export { participantsRouter };