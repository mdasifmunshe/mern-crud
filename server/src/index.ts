require('dotenv').config();
import app from './server';
import database from './db';

const PORT = process.env.PORT || 8080;

database.on('error', (error) => {
	console.log(error);
});

database.once('connected', () => {
	console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
