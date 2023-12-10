import dayjs from "dayjs";
import { participantsRepository } from "../repositories/participants.repository.js";
import { participantsErrors } from "../errors/participants.errors.js";
import { messagesErrors } from "../errors/messages.errors.js";
import { messagesRepository } from "../repositories/messages.repository.js";
import httpStatus from "http-status";

async function createMessage(user, to, text, type) {

    const userExist = await participantsRepository.findParticipantByName(user);
    if (!user || !userExist){
        throw participantsErrors.participantDoesntExistsError();
    }
    let currentTime = dayjs().format('HH:mm:ss'); 
    const newMessage = {
        from: user,
        to: to,
        text: text,
        type: type,
        time: currentTime
    }
    try {
        messagesRepository.createMessage(newMessage);
        return httpStatus.CREATED;
    }
    catch (err){
        throw participantsErrors.internalServerError();
    }
}

async function getMessages(user, limit){

    if (limit !== undefined && (limit <= 0 || isNaN(limit))){
        throw messagesErrors.invalidLimitError();
    }
    limit = parseInt(limit);

    try{
        const messages = await messagesRepository.getMessages(user);
        let messagesLimited = messages;
        if(limit !== undefined){
            messagesLimited = messages.slice(-limit);
        }
        return messagesLimited;
    }
    catch(err){
        throw participantsErrors.internalServerError();
    }
}

export const messagesServices = {
    createMessage,
    getMessages,
}