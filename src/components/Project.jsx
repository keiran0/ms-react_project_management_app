import Tasks from './Tasks'

export default function Project({
    renderedProject,
    deleteProjectHandler,
    addTaskHandler,
    deleteTaskHandler}){

    return(
        <>
            <p>{renderedProject.title}</p>
            <p>{renderedProject.description}</p>
            <p>{renderedProject.dueDate}</p>
            <button onClick={deleteProjectHandler}>Delete Project</button>
            <Tasks renderedProject={renderedProject} addTask={addTaskHandler} deleteTaskHandler={deleteTaskHandler}/>
            
        </>
    )
}