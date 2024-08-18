// src/controllers/userController.js
import { db } from '../config/database.js';
import { users, chatRoomsToUsers } from '../drizzle/schemas/user.js';
import { eq, ilike } from 'drizzle-orm';

export const userController = {
  createUser: async (userData) => {
    const [newUser] = await db.insert(users).values(userData).returning();
    return newUser;
  },

  getUser: async (userID) => {
    return db.query.users.findFirst({
      where: eq(users.userID, userID),
      with: {
        chatRooms: {
          with: {
            chatRoom: true
          }
        }
      }
    });
  },

  updateUser: async (userID, userData) => {
    const [updatedUser] = await db.update(users)
      .set(userData)
      .where(eq(users.userID, userID))
      .returning();
    return updatedUser;
  },

  deleteUser: async (userID) => {
    await db.delete(users).where(eq(users.userID, userID));
  },

  searchUsers: async (query) => {
    return db.query.users.findMany({
      where: ilike(users.username, `%${query}%`)
    });
  },

  updateStatus: async (userID, status) => {
    await db.update(users)
      .set({ status, lastSeen: new Date() })
      .where(eq(users.userID, userID));
  },

  updateOnlineStatus: async (userID, isOnline) => {
    await db.update(users)
      .set({ isOnline, lastSeen: new Date() })
      .where(eq(users.userID, userID));
  },

  addToArchived: async (userID, archivedUserID) => {
    const user = await db.query.users.findFirst({
      where: eq(users.userID, userID)
    });
    const updatedArchived = [...(user.archived || []), archivedUserID];
    await db.update(users)
      .set({ archived: updatedArchived })
      .where(eq(users.userID, userID));
  },

  addToBlocked: async (userID, blockedUserID) => {
    const user = await db.query.users.findFirst({
      where: eq(users.userID, userID)
    });
    const updatedBlocked = [...(user.blocked || []), blockedUserID];
    await db.update(users)
      .set({ blocked: updatedBlocked })
      .where(eq(users.userID, userID));
  },

  removeFromArchived: async (userID, archivedUserID) => {
    const user = await db.query.users.findFirst({
      where: eq(users.userID, userID)
    });
    const updatedArchived = (user.archived || []).filter(id => id !== archivedUserID);
    await db.update(users)
      .set({ archived: updatedArchived })
      .where(eq(users.userID, userID));
  },

  removeFromBlocked: async (userID, blockedUserID) => {
    const user = await db.query.users.findFirst({
      where: eq(users.userID, userID)
    });
    const updatedBlocked = (user.blocked || []).filter(id => id !== blockedUserID);
    await db.update(users)
      .set({ blocked: updatedBlocked })
      .where(eq(users.userID, userID));
  },

  getUserChatRooms: async (userID) => {
    return db.query.chatRoomsToUsers.findMany({
      where: eq(chatRoomsToUsers.userID, userID),
      with: {
        chatRoom: {
          with: {
            participants: {
              with: {
                user: true
              }
            }
          }
        }
      }
    });
  }
};