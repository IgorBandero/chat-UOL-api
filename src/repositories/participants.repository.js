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

async function updateStatus(user){
    const participant = await db.collection("participants").updateOne({name: user}, {$set: {lastStatus: Date.now()}});
    return participant;
}

async function findOfflineUsers(){
    const usersOffline = await db.collection('participants').find({lastStatus:{$lt: (Date.now() - 10000)}}).toArray();
    return usersOffline;
}

async function removeOfflineUsers(){
    const usersOffline = await db.collection('participants').deleteMany({lastStatus:{$lt:(Date.now() - 10000)}});
    return usersOffline;
}

export const participantsRepository = {
    findParticipantByName,
    createParticipant,
    getParticipants,
    updateStatus,
    findOfflineUsers,
    removeOfflineUsers
}