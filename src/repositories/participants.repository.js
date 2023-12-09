import { db } from "../config/database.config.js";

async function findParticipantByName(name){
    const participant = await db.collection("participants").findOne({ name: name });
    return participant;
}

async function createParticipant(newparticipant){
    const participant = await db.collection("participants").insertOne(newparticipant);
    return participant;
}

async function getParticipants(){
    const participants = await db.collection("participants").find().toArray();
    return participants;
}

export const participantsRepository = {
    findParticipantByName,
    createParticipant,
    getParticipants,
}