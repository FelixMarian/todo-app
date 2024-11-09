import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SectionList from './DragAndDrop/SectionList.jsx';
import '../styles/Dnd.css';
import AddButton from "./AddButton.jsx";
import axios from "axios";

const fetchTasks = async () => {
    try {
        const response = await axios.get('http://localhost:5000/apiG/getTasks');
        console.log('Tasks:', response.data);
        return response.data;
    } catch (error) {
        console.error('Eroare la obținerea task-urilor:', error);
        return [];
    }
};

function TodoList() {
    const [sections, setSections] = useState([]);

    //Reload tasks from db every 2 seconds
    useEffect(() => {
        const loadTasks = async () => {
            const tasks = await fetchTasks();
            setSections(tasks);
        };
        loadTasks();


        const intervalId = setInterval(loadTasks, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="DndContainer">
                <DndProvider backend={HTML5Backend}>
                    <SectionList sections={sections} />
                </DndProvider>
            </div>
        </>
    );
}

export default TodoList;
