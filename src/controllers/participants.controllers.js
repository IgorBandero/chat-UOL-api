import { MongoClient, ObjectId } from 'mongodb';
import httpStatus from 'http-status';
import { participantsServices } from '../services/participants.services.js';

async function createParticipant(req, res){

    const { name } = req.body;     
    const result = await participantsServices.createParticipant(name);
    return res.status(httpStatus.CREATED).send(result.toString());
}

export const participantsControllers = {
    createParticipant,
}