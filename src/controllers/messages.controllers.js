import httpStatus from 'http-status';
import { messagesServices } from '../services/messages.services.js';

async function createMessage(req, res){

    const { to, text, type } = req.body;
    const user = req.headers.user;
    const result = await messagesServices.createMessage(user, to, text, type);
    return res.status(httpStatus.CREATED).send(result.toString());
}

export const messagesControllers = {
    createMessage,
}