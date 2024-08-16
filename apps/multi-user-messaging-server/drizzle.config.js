import {defineConfig} from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set');
}
export default defineConfig({
    dialect: "postgresql", 
    schema: "./src/drizzle/schemas/*",
    out: "./src/drizzle/migrations",
    dbCredentials:{
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    },
    migrations: {
      table: "migrations",
      schema: "public"
    },
    verbose: true,
    strict: true
});