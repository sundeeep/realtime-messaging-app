import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './Users.schema';

export const chatRooms = pgTable('chatRooms', {
  chatRoomID: uuid('chatRoomID').primaryKey().defaultRandom(),
  participants: varchar('participants').array(2).notNull(), // Exactly 2 participants
});

export const chatRoomsRelations = relations(chatRooms, ({ many }) => ({
  users: many(users, {
    relationName: 'chatRoomParticipants',
  }),
}));