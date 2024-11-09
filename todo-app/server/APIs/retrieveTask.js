import express from "express";
const router = express.Router();
import Task from '../models/task.js';


router.get('/getTasks', async (req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;