import { db } from '../config/database.js';
import { users } from '../drizzle/schemas/user.js';
import { messages } from '../drizzle/schemas/message.js';
import { eq } from 'drizzle-orm';

export const socketController = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join', async (userID) => {
      socket.join(userID);
      await db.update(users).set({ isOnline: true }).where(eq(users.userID, userID));
      io.emit('userStatusChanged', { userID, isOnline: true });
    });

    socket.on('sendMessage', async (message) => {
      const { senderID, receiverID, content, messageType } = message;
      const [newMessage] = await db.insert(messages).values({
        senderID,
        receiverID,
        content,
        messageType,
      }).returning();
      io.to(receiverID).emit('newMessage', newMessage);
    });

    socket.on('typing', (data) => {
      const { senderID, receiverID } = data;
      socket.to(receiverID).emit('userTyping', senderID);
    });

    socket.on('disconnect', async () => {
      const userID = Object.keys(socket.rooms)[1]; // Assuming the user's room is the second one
      if (userID) {
        await db.update(users).set({ isOnline: false, lastSeen: new Date() }).where(eq(users.userID, userID));
        io.emit('userStatusChanged', { userID, isOnline: false });
      }
      console.log('A user disconnected');
    });
  });
};