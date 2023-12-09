import { db } from "../config/database.config.js";

async function createMessage(newmessage){
    const message = await db.collection("messages").insertOne(newmessage);
    return message;
}

export const messagesRepository = {
    createMessage,
}