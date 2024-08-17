import { pgTable, uuid, varchar, timestamp, pgEnum, integer } from 'drizzle-orm/pg-core';

export const messageTypeEnum = pgEnum('messageType', ['text', 'image', 'video']);
export const messageStatusEnum = pgEnum('messageStatus', ['sent', 'delivered', 'seen']);

export const messages = pgTable('messages', {
  messageID: uuid('messageID').primaryKey().defaultRandom(),
  senderID: varchar('senderID').notNull(),
  receiverID: varchar('receiverID').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
  messageType: messageTypeEnum('messageType').notNull(),
  messageStatus: messageStatusEnum('messageStatus').default('sent'),
  content: varchar('content').notNull(),
  seenAt: timestamp('seenAt'),
  deliveredAt: timestamp('deliveredAt'),
  sizeOfMessage: integer('sizeOfMessage')
});