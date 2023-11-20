
import { useRef } from 'react';

export default function Task({ task, deleteTaskHandler }) {

    let taskName = useRef();

    function deleteTask() {
        deleteTaskHandler(taskName.current.innerHTML)
        //console.log(taskName.current.innerHTML)
    }

    return (
        <li className="grid grid-cols-3">
            <span className="col-span-2" ref={taskName}>{task}</span>
            <button className="text-end" onClick={deleteTask}>Clear</button>
        </li>
    )
}