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

async function updateStatus(user){
    
    if(!user){
        throw participantsErrors.userNotFound();
    }
    try {
        const participant = await participantsRepository.findParticipantByName(user);
        console.log(participant);
        let participantFound = participant;
        if (participantFound.length === 0){
            throw participantsErrors.userNotFound();
        }
        try{
            const participant = await participantsRepository.updateStatus(user);
            return participant;
        }
        catch(err){
            throw participantsErrors.internalServerError();
        }       
    }
    catch (err){
        throw participantsErrors.internalServerError();
    }
}

async function removeOfflineUsers(){

    try {
        const usersOffline = await participantsRepository.findOfflineUsers();
        if (usersOffline.length > 0) {
            let logoutMessages = usersOffline.map(user => {
                return {
                    from: user.name,
                    to: 'Todos',
                    text: 'sai da sala...',
                    type: 'status',
                    time: dayjs().format("HH:mm:ss")}
            });
            await messagesRepository.createMessages(logoutMessages);
            await participantsRepository.removeOfflineUsers();
        }
    } catch (err) {
        throw participantsErrors.internalServerError();
    }
}

export const participantsServices = {
    createParticipant,
    getParticipants,
    updateStatus,
    removeOfflineUsers
}