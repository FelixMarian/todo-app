import AddTask from '../components/AddTask.jsx'
import {useState} from 'react'

function AddButton() {
    const [newTask, setNewTask] = useState(0);

    const openTaskModal = () => {
        setNewTask(1);
    };

    const closeTaskModal = () =>{
        setNewTask(0);
    }
    return (
        <>
            <button type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={openTaskModal}
                    >Add task</button>
            {newTask === 1 && (
                <div className="modal-overlay" onClick={closeTaskModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <AddTask closeTaskModal={closeTaskModal}/>
                    </div>
                </div>
            )}
            </>);

}

export default AddButton;