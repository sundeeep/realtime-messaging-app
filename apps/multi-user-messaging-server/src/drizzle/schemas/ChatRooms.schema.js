import { pgTable, uuid, varchar, boolean } from 'drizzle-orm/pg-core';

export const chatRooms = pgTable('chatRooms', {
  chatRoomID: uuid('chatRoomID').primaryKey().defaultRandom(),
  participants: varchar('participants').array(),
  admin: varchar('admin').notNull(),
  coAdmins: varchar('coAdmins').array(),
  isGroup: boolean('isGroup').default(false),
  groupAvatar: varchar('groupAvatar'),
  groupDescription: varchar('groupDescription', { length: 255 })
});