import { db } from "../services/firebase";

export function readChats() {
  let chat = [];
  db.ref("chats").on("value", snapshot => {
    snapshot.forEach(snap => {
      chat.push(snap.val())
    });
    return chat;
  });
}

export function writeChats(message) {
  return db.ref("chats").push({
    content: message.content,
    timestamp: message.timestamp,
    uid: message.uid
  });
}