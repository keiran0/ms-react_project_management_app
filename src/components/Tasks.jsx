import Task from './Task';

import { useRef } from 'react';

export default function Tasks({ renderedProject, addTask, deleteTaskHandler }) {

    let newTask = useRef();

    function addNewTask() {
        addTask(newTask);
        newTask.current.value = ''
    }

    return (
        <>
            <hr className="my-5"></hr>
            <h1 className="font-semibold text-xl">Tasks</h1>
            <input className="bg-stone-300"ref={newTask}></input>
            <button className="m-5" onClick={() => addNewTask(newTask)}>Add Task</button>
            {renderedProject.tasks.length > 0 ?
                <ul className="bg-stone-100 py-6 px-4">
                    {renderedProject.tasks.map(task => <Task
                        key={Math.random()}
                        task={task}
                        deleteTaskHandler={deleteTaskHandler} />)}

                </ul> : <p>This project does not have any tasks yet</p>}
        </>

    )
}