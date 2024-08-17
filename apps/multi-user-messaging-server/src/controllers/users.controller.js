import { db } from '../config/database.js';
import { users } from '../drizzle/schemas/user.js';
import { eq } from 'drizzle-orm';

export const userController = {
  registerUser: async (req, res) => {
    const { userID, username, email } = req.body;
    try {
      await db.insert(users).values({ userID, username, email });
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error registering user' });
    }
  },

  searchUsers: async (req, res) => {
    const { query } = req.query;
    try {
      const results = await db.select().from(users).where(eq(users.username, query));
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: 'Error searching users' });
    }
  },

  updateUserStatus: async (req, res) => {
    const { userID, status } = req.body;
    try {
      await db.update(users).set({ status }).where(eq(users.userID, userID));
      res.json({ message: 'Status updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating status' });
    }
  },
};
