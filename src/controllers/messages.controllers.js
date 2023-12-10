import httpStatus from 'http-status';
import { messagesServices } from '../services/messages.services.js';

async function createMessage(req, res){

    const { to, text, type } = req.body;
    const user = req.headers.user;
    const result = await messagesServices.createMessage(user, to, text, type);
    return res.status(httpStatus.CREATED).send(result.toString());
}

async function getMessages(req, res){

    const user = req.headers.user;
    let limit = req.query.limit;
    const messages = await messagesServices.getMessages(user, limit);
    return res.send(messages);
}

export const messagesControllers = {
    createMessage,
    getMessages,
}