import Task from './Task'

export default function Project({renderedProject, deleteProjectHandler, deleteTaskHandler, addTaskHandler}){

    return(
        <>
            <p>{renderedProject.title}</p>
            <p>{renderedProject.description}</p>
            <p>{renderedProject.dueDate}</p>
            <button onClick={deleteProjectHandler}>Delete</button>
            <h2>Tasks</h2>
            <input type="text"></input>
            <button onClick={addTaskHandler}>Add Task</button>
            {renderedProject.tasks.length < 1 ? <p>No tasks</p> : renderedProject.tasks.map(task=><Task task={task} deleteTaskHandler={deleteTaskHandler}/>
                )
            }
        </>
    )
}