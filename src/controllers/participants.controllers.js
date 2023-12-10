import httpStatus from 'http-status';
import { participantsServices } from '../services/participants.services.js';

async function createParticipant(req, res){

    const { name } = req.body;     
    const result = await participantsServices.createParticipant(name);
    return res.status(httpStatus.CREATED).send(result.toString());
}

async function getParticipants(req, res){
    const participants = await participantsServices.getParticipants();
    return res.send(participants);
}

export const participantsControllers = {
    createParticipant,
    getParticipants
}