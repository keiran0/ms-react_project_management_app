export default function Project({renderedProject, deleteHandler}){
    console.log(renderedProject)

    return(
        <>
            <p>{renderedProject.title}</p>
            <p>{renderedProject.description}</p>
            <p>{renderedProject.dueDate}</p>
            <button onClick={deleteHandler}>Delete</button>
            <h2>Tasks</h2>
            <input type="text"></input>
            <button>Add Task</button>
            {renderedProject.tasks.length < 1 ? <p>No tasks</p> : renderedProject.tasks.map(task=><><p>{task}</p><button>Clear</button></>)}
        </>
    )
}