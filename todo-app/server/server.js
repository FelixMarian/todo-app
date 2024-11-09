import express from 'express';
import cors from 'cors';
import connectDB from './db/tasksDB.js';

const port = 3000;
const app = express();
import taskAdd from'./APIs/addTask.js';
import getTask from './APIs/retrieveTask.js'

connectDB();
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use('/api', taskAdd);
app.use('/apiG', getTask);

const PORT = 5000;
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
