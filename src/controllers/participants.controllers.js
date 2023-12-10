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

async function updateStatus(req, res){

    const user = req.headers.user;
    const participant = await participantsServices.updateStatus(user);
    return res.status(httpStatus.OK).send(participant);
}

async function removeOfflineUsers(){
    participantsServices.removeOfflineUsers();
}

export const participantsControllers = {
    createParticipant,
    getParticipants,
    updateStatus,
    removeOfflineUsers
}