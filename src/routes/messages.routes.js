import { Router } from 'express';
import { validateSchema } from '../middlewares/validation.middleware.js';
import { messageSchema } from '../schemas/messages.schemas.js';

import { messagesControllers } from '../controllers/messages.controllers.js';

const messagesRouter = Router();

messagesRouter.post('/', validateSchema(messageSchema), messagesControllers.createMessage);

export { messagesRouter };