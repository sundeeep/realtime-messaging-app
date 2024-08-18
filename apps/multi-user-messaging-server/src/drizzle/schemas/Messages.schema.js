import { pgTable, uuid, varchar, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './Users.schema';

export const messageTypeEnum = pgEnum('messageType', ['text', 'image', 'video']);
export const messageStatusEnum = pgEnum('messageStatus', ['sent', 'delivered', 'seen']);

export const messages = pgTable('messages', {
  id: uuid('id').defaultRandom().primaryKey(),
  senderId: varchar('senderId').notNull().references(() => users.id, { onDelete: 'cascade' }),
  receiverId: varchar('receiverId').notNull().references(() => users.id, { onDelete: 'cascade' }),
  content: varchar('content').notNull(),
  type: messageTypeEnum('type').default('text'),
  status: messageStatusEnum('status').default('sent'),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export const messagesRelations = relations(messages, ({ one }) => ({
  sender: one(users, {
    fields: [messages.senderId],
    references: [users.id],
    relationName: 'sender',
  }),
  receiver: one(users, {
    fields: [messages.receiverId],
    references: [users.id],
    relationName: 'receiver',
  }),
}));
