require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userController from './controllers/user.controller';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	console.log('Hello from Express');
	res.status(200);
	res.json({ message: 'Hello World!' });
});

app.use('/api/user', cors(), userController);

export default app;
