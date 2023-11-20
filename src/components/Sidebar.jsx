export default function Sidebar({ projectList, createHandler, projectSelectHandler }) {

    return (

        <menu className="bg-slate-950 text-white rounded-r-md min-w-[40%]">
            <div className="mx-6 my-10">
                <h1 className="font-semibold text-lg">YOUR PROJECTS</h1>
                <button className="bg-zinc-800 rounded-md px-2 py-1 my-6" onClick={createHandler}>+ Add Project</button>
                {projectList.map(project => <button className="block my-1" onClick={projectSelectHandler} value={project.title} key={project.title}>{project.title}</button>)}
            </div>
        </menu>
    )
}