export default function Sidebar({projectList, createHandler, projectSelectHandler}){
    return(
        <div>
            <h1>YOUR PROJECTS</h1>
            <button onClick={createHandler}>+ Add Project</button>
            {projectList.map(project => <button onClick={projectSelectHandler} value={project.title}>{project.title}</button>)}
        </div>
    )
}