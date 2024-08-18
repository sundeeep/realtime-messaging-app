
import { db } from '../config/database.js';
import { eq } from 'drizzle-orm';
import { chatRooms } from '../drizzle/schemas/ChatRooms.schema.js';

export const chatRoomController = {
  createChatRoom: async (req, res) => {
    const { participants } = req.body;
    try {
      const [newChatRoom] = await db.insert(chatRooms).values({
        participants
      }).returning();
      res.status(201).json(newChatRoom);
    } catch (error) {
      res.status(500).json({ error: 'Error creating chat room' });
    }
  },

  getChatRooms: async (req, res) => {
    const { userID } = req.params;
    try {
      const rooms = await db.select()
        .from(chatRooms)
        .where(eq(chatRooms.participants, userID));
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching chat rooms' });
    }
  },

};

