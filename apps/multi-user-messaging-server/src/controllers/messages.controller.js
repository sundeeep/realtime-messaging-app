
// src/controllers/messageController.js
import { db } from '../config/database.js';
import { messages } from '../drizzle/schemas/message.js';
import { eq, and, or, desc } from 'drizzle-orm';

export const messageController = {
  createMessage: async (messageData) => {
    const [newMessage] = await db.insert(messages).values(messageData).returning();
    return newMessage;
  },

  getMessage: async (messageId) => {
    return db.query.messages.findFirst({
      where: eq(messages.id, messageId),
      with: {
        sender: true,
        receiver: true
      }
    });
  },

  updateMessage: async (messageId, messageData) => {
    const [updatedMessage] = await db.update(messages)
      .set(messageData)
      .where(eq(messages.id, messageId))
      .returning();
    return updatedMessage;
  },

  deleteMessage: async (messageId) => {
    await db.delete(messages).where(eq(messages.id, messageId));
  },

  getMessages: async (userID1, userID2) => {
    return db.query.messages.findMany({
      where: or(
        and(eq(messages.senderID, userID1), eq(messages.receiverID, userID2)),
        and(eq(messages.senderID, userID2), eq(messages.receiverID, userID1))
      ),
      orderBy: desc(messages.createdAt),
      with: {
        sender: true,
        receiver: true
      }
    });
  },

  updateMessageStatus: async (messageId, status) => {
    await db.update(messages)
      .set({ status })
      .where(eq(messages.id, messageId));
  },
};


