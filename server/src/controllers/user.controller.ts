import express from 'express';
import User from '../models/user.model';

const router = express.Router();

// Get all Method
router.get('/', async (req, res) => {
	try {
		const data = await User.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Get by ID Method
router.get('/:id', async (req, res) => {
	try {
		const data = await User.findById(req.params.id);
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Post Method
router.post('/adduser', async (req, res) => {
	const data = new User({
		name: req.body.name,
		age: req.body.age,
	});

	try {
		const dataToSave = await data.save();
		res.status(200).json(dataToSave);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//Update by ID Method
router.put('/update/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const updatedData = req.body;
		const options = { new: true };

		const result = await User.findByIdAndUpdate(id, updatedData, options);

		res.send(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const data = await User.findByIdAndDelete(id);
		res.send(`Document with ${data.name} has been deleted..`);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

export default router;
