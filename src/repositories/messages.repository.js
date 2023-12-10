import { db } from "../config/database.config.js";

async function createMessage(newmessage){
    const message = await db.collection("messages").insertOne(newmessage);
    return message;
}

async function getMessages(user){
    const messages = await db.collection("messages").find({$or: [{type: "message"}, {to:"Todos"}, {to: user}, {from: user}]}).toArray();
    return messages;
}

export const messagesRepository = {
    createMessage,
    getMessages,
}