
import { db } from '../config/database.js';
import { chatRooms } from '../drizzle/schemas/chatRoom.js';
import { eq } from 'drizzle-orm';

export const chatRoomController = {
  createChatRoom: async (req, res) => {
    const { participants, admin, isGroup, groupAvatar, groupDescription } = req.body;
    try {
      const [newChatRoom] = await db.insert(chatRooms).values({
        participants,
        admin,
        isGroup,
        groupAvatar,
        groupDescription,
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

