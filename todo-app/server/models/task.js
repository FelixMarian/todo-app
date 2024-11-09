import mongoose from 'mongoose';

// Model for tasks database
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdB: {
        type: String,
        required: true
    },
    dateC: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const task = mongoose.model('task', taskSchema);

export default task;
