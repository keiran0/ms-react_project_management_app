import NoProject from "./NoProject";
import Project from "./Project";

export default function DisplayProject({projectList, createHandler, renderedProject = projectList[0], deleteProjectHandler, deleteTaskHandler, addTaskHandler}){

    return(
        <>
            {/* <p>{renderedProject.title}</p> */}
            {projectList.length < 1 ? 
            <NoProject createHandler={createHandler}/> 
            : <Project renderedProject={renderedProject} deleteProjectHandler={deleteProjectHandler} deleteTaskHandler={deleteTaskHandler} addTaskHandler={addTaskHandler}/> }
        </>
    )
}