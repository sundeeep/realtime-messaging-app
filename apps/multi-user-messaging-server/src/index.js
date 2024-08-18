import express from 'express';
import multer from 'multer';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import {Server} from 'socket.io';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173", // Development frontend URL
    "https://hirytexts.vercel.app/", // Production frontend URL
];
  
  // CORS options
   const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  };
  
app.use(cors(corsOptions));
const upload = multer({ dest: "uploads/" });
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
// Use compression middleware
app.use(compression());
  
// Use cookie parser middleware
app.use(cookieParser());
  
// Your other middleware and routes
app.use(express.json());


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the backend server!</h1>')
})

const httpExpressServer = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

const approvedOrigins = ["http://localhost:5173", "http://localhost:3000"];

export const WSServer = new Server(httpExpressServer, {
  cors: {
    origin: process.env.NODE_ENV === 'production' ? false : approvedOrigins
  }
});
