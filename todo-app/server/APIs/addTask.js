import express from 'express';
const router = express.Router();
import Task from '../models/task.js';

// add a task to db
router.post('/addToDB', async (req, res) => {
    try {
        const task = new Task(req.body);
        const resp = await task.save();
        res.status(201).json(resp);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;