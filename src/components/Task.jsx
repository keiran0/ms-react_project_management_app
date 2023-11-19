
import {useRef} from 'react';

export default function Task({task, deleteTaskHandler}){

    let taskName = useRef();

    function deleteTask(){
        deleteTaskHandler(taskName.current.innerHTML)
        //console.log(taskName.current.innerHTML)
    }

    return(
        <>
            <ul>
                <span ref={taskName}>{task}</span>
                <button onClick={deleteTask}>Clear</button>
            </ul>
        </>
    )
}