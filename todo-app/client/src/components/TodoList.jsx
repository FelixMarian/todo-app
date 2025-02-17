import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SectionList from './DragAndDrop/SectionList.jsx';
import '../styles/Dnd.css';
import AddButton from "./AddButton.jsx";
import axios from "axios";

function TodoList() {
    const [sections, setSections] = useState([]);

    const getTasks = async () => {
        try{
            const response = await axios.get("https://localhost:7202/api/Tasks/get",{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                }
            });
            console.log(response.data);
            setSections(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {

        getTasks();
    }, []);

    return (
        <>
            <div className="DndContainer">
                <DndProvider backend={HTML5Backend}>
                    <SectionList sections={sections}/>
                </DndProvider>
            </div>
        </>
    );
}

export default TodoList;