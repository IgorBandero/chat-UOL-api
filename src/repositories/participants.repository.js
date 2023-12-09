import { db } from "../config/database.config.js";

async function findParticipantByName(name){
    const participant = await db.collection("participants").findOne({ name: name });
    return participant;
}

async function createParticipant(newparticipant){
    const participant = await db.collection("participants").insertOne(newparticipant);
    return participant;
}
export const participantsRepository = {
    findParticipantByName,
    createParticipant,
}