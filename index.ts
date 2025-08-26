import express, { Request, Response } from 'express';
import "dotenv/config"
import mongoose from 'mongoose';
import router from './routes/validation';
import sign_up_router from './routes/signup';
import login_router from './routes/login';

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
app.use('/signup', sign_up_router)
app.use('/login', login_router)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});