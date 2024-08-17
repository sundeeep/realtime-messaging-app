import { db } from '../config/database.js';
import { messages } from '../drizzle/schemas/message.js';
import { eq, and, desc } from 'drizzle-orm';

export const messageController = {
  sendMessage: async (req, res) => {
    const { senderID, receiverID, content, messageType } = req.body;
    try {
      const [newMessage] = await db.insert(messages).values({
        senderID,
        receiverID,
        content,
        messageType,
      }).returning();
      res.status(201).json(newMessage);
    } catch (error) {
      res.status(500).json({ error: 'Error sending message' });
    }
  },

  getMessages: async (req, res) => {
    const { senderID, receiverID, page = 1, limit = 20 } = req.query;
    try {
      const offset = (page - 1) * limit;
      const messageList = await db.select()
        .from(messages)
        .where(
          and(
            eq(messages.senderID, senderID),
            eq(messages.receiverID, receiverID)
          )
        )
        .orderBy(desc(messages.createdAt))
        .limit(limit)
        .offset(offset);
      res.json(messageList);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching messages' });
    }
  },

};
