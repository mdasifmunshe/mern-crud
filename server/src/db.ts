require('dotenv').config();
import mongoose from 'mongoose';

const mongoString = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);
mongoose.connect(mongoString);
const database = mongoose.connection;

export default database;
