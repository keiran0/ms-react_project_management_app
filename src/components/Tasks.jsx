
// export default function Task({task, projectList, setProjectList, renderedProject}) {

//     function deleteTaskHandler(e){

//         e.preventDefault();

//         setProjectList((projectList) => [
//             ...projectList.filter((project)=> project !== renderedProject),
//             {
//                 ...renderedProject,
//                 tasks: renderedProject.tasks.filter((task)=> task !== e.target.value)
//             }
//         ])
//         console.log(projectList)

//     }



//     return (
//         <form key={task}>
//             <label>{task}</label>
//             <button onClick={(e)=>deleteTaskHandler(e)} value={task}>TEST CLICK ME!!!!!!!!!</button>
//         </form>

//     )
// }

import Task from './Task';

import { useRef } from 'react';

export default function Tasks({renderedProject, addTask, deleteTaskHandler}){

    let newTask = useRef();

    function addNewTask(){
        addTask(newTask);
        newTask.current.value = ''
    }

    return(
        <ul>
            <input ref={newTask}></input>
            <button onClick={()=>addNewTask(newTask)}>Add Task</button>
            {renderedProject.tasks.map(task=><Task 
                key={Math.random()} 
                task={task}
                deleteTaskHandler={deleteTaskHandler}/>)}
        </ul>
    )
}