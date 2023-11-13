
import NoProject from "./NoProject";
import Project from "./Project";

export default function DisplayProject({
    projectList, 
    setProjectList,
    createHandler, 
    renderedProject = projectList[0], 
    deleteProjectHandler}){



    return(
        <>
            {/* <p>{renderedProject.title}</p> */}

            {projectList.length < 1 ? 
            <NoProject createHandler={createHandler}/> 
            : <Project renderedProject={renderedProject} 
            deleteProjectHandler={deleteProjectHandler} 
            projectList={projectList}
            setProjectList={setProjectList}
            /> }
        </>
    )
}