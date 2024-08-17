import { pgTable, varchar, timestamp, boolean, pgEnum } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['online', 'sleeping', 'at work', 'out station', "do not disturb"]);
export const roleEnum = pgEnum('role', ['admin', 'coadmin', 'customers']);

export const users = pgTable('users', {
  userID: varchar('userID').primaryKey(),
  username: varchar('username').notNull(),
  email: varchar('email').notNull().unique(),
  status: statusEnum('status').default('online'),
  archived: varchar('archived').array(),
  blocked: varchar('blocked').array(),
  isOnline: boolean('isOnline').default(false),
  role: roleEnum('role').default('customers'),
  about: varchar('about', { length: 255 }),
  lastSeen: timestamp('lastSeen').defaultNow()
});