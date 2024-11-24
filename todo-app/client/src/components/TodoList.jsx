import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SectionList from './DragAndDrop/SectionList.jsx';
import '../styles/Dnd.css';
import AddButton from "./AddButton.jsx";
import axios from "axios";

function TodoList() {
    const [sections, setSections] = useState([]);





    // Lista custom fallback
    const fallbackSections = [
        { id: 1, title: 'Default Section 1', description: "Description 1", dateC:"24.11.2024", deadline: "31.12.2024" },
        { id: 2, title: 'Default Section 2', description: "Description 2", dateC:"03.12.2022", deadline: "13.11.2023"},
    ];


    useEffect(() => {
        setSections(fallbackSections);
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
