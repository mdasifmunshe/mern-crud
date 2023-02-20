import express from 'express';
import User from '../models/user.model';

const router = express.Router();

// Get all Method
router.get('/', async (req, res) => {
	try {
		const user = await User.find();
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Get by ID Method
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Post Method
router.post('/adduser', async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	try {
		const userToSave = await user.save();
		res.status(200).json(userToSave);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//Update by ID Method
router.put('/update/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const updatedUser = req.body;
		const options = { new: true };

		const result = await User.findByIdAndUpdate(id, updatedUser, options);

		res.send(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const user = await User.findByIdAndDelete(id);
		res.send(`User '${user.name}' has been deleted..`);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

export default router;
