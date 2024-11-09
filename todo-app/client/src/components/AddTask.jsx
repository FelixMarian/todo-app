import React, { useState } from 'react';
import '../styles/AddTask.css';
import axios from 'axios';

function AddTask({ closeTaskModal }) {
    const [task, setTask] = useState({
        title: '',
        description: '',
        createdB: 'Felix',
        dateC: '',
        dl: '',
        status: 'Unfinished'
    });

    //Function to format date
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0'); // Folosește getDate() în loc de getDay()
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Adaugă 1 pentru lună
        const year = date.getFullYear();
        return `${day}/${month}/${year}`; // Folosește ghilimele inverse pentru interpolare
    };

    // Method to add a new task into db
    const addTaskToDb = async () => {
        try {
            const raspuns = await axios.post('http://localhost:5000/api/addToDB', {
                title: task.title,
                description: task.description,
                createdB: task.createdB,
                dateC: formatDate(new Date()), // Data curentă
                deadline: formatDate(new Date(task.dl)), // Convertește la Date
                status: task.status
            });
            console.log('Task adăugat:', raspuns.data);

            // Reset settings
            setTask({
                title: '',
                description: '',
                createdB: 'Felix',
                dateC: '',
                dl: '',
                status: 'Unfinished'
            });
            closeTaskModal();
        } catch (error) {
            console.error('Eroare la trimiterea datelor:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTaskToDb();
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <h2>Add a new task</h2>
            <div className="form-group">
                <label>Title:</label>
                <input type="text" name="title" value={task.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Description:</label>
                <textarea name="description" value={task.description} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Deadline:</label>
                <input type="date" name="dl" value={task.dl} onChange={handleChange} required />
            </div>
            <button type="submit" className="btnSubmit">Add Task</button>
        </form>
    );
}

export default AddTask;
