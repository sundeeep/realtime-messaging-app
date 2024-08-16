import {pgTable, uuid, varchar} from "drizzle-orm/pg-core";

export const User = pgTable("user",{
    id: uuid("$userId").primaryKey().defaultRandom(),
    userName: varchar("userName", {length: 16}).notNull()
})