import dayjs from "dayjs";
import { participantsRepository } from "../repositories/participants.repository.js";
import { messagesRepository } from "../repositories/messages.repository.js";
import { conflictErrors } from "../errors/conflict.errors.js";
import httpStatus from "http-status";

async function createParticipant(name) {

    const participant = await participantsRepository.findParticipantByName(name);
    if (participant) {
        throw conflictErrors.participantAlreadyExistsError();
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

export const participantsServices = {
    createParticipant,
}