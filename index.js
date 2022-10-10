import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import UserRoute from './routes/UserRoute.js'
import GugurRoute from './routes/GugurRoute.js'
import AuthRoute from './routes/AuthRoute.js'
dotenv.config();

const app = express();

mongoose.connect('mongodb+srv://halonthe:kontolsingo@cluster0.pidfhbt.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database connected...'));

app.use(cors());
app.use(express.json())
app.use(AuthRoute);
app.use(UserRoute);
app.use(GugurRoute);

app.listen(5000, () => console.log('server listening on port 5000...'))