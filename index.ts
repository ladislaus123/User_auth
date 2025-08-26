import express, { Request, Response } from 'express';
import "dotenv/config"
import mongoose from 'mongoose';
import router from './routes/validation';

const app = express();

const url = process.env.DATABASE_URL as string;

app.use(express.json())

const connect_to_db = async() =>{
   try {
     await mongoose.connect(url)
     console.log("Connected to mongo db")

   } catch (error) {
    console.error("database onnection failed: ", error)
    process.exit(1)
   }
};

connect_to_db();


const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', router)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});