import express, { Request, Response } from 'express';
import "dotenv/config"
import mongoose from 'mongoose';

const url = process.env.DATABASE_URL as string;

const connect_to_db = async() =>{
   try {
     await mongoose.connect(url)
     console.log("Connected to mongo db")

   } catch (error) {
    console.error("database onnection failed: " + error)
    process.exit(1)
   }
};

connect_to_db();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});