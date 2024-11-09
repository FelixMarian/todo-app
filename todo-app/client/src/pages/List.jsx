import HeaderNav from "../components/HeaderNav.jsx";
import TodoList from "../components/TodoList.jsx";
import AddButton  from "../components/AddButton.jsx";
import "../styles/AddBtn.css"
import React from "react";

function List(){
    return (
        <>
        <HeaderNav/>
            <div className="listContainer">
                <div className="addBtn"><AddButton/></div>
                <TodoList/>
            </div>
        </>
    )
}

export default List;