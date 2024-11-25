import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

const env = process.env;

export const PORT = env.PORT;