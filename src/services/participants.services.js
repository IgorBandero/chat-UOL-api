import dayjs from "dayjs";
import { participantsRepository } from "../repositories/participants.repository.js";
import { messagesRepository } from "../repositories/messages.repository.js";
import { participantsErrors } from "../errors/participants.errors.js";
import httpStatus from "http-status";

async function createParticipant(name) {

    const participant = await participantsRepository.findParticipantByName(name);
    if (participant) {
        throw participantsErrors.participantAlreadyExistsError();
    } 
    const newParticipant = {
        name: name,
        lastStatus: Date.now()
    }
    const currentTime = dayjs().format('HH:mm:ss'); 
    const logMessage = { 
        from: name,
        to: 'Todos',
        text: 'entra na sala...',
        type: 'status',
        time: currentTime
    }
    try {
        participantsRepository.createParticipant(newParticipant);
        messagesRepository.createMessage(logMessage);
        return httpStatus.CREATED;
    }
    catch (err){
        return httpStatus.INTERNAL_SERVER_ERROR;
    }
}

async function getParticipants(){

    try{
        const participants = participantsRepository.getParticipants();
        if(!participants){
            return ([]);
        }
        return (participants);
    }
    catch(err){
        throw participantsErrors.internalServerError();
    }
}

export const participantsServices = {
    createParticipant,
    getParticipants
}