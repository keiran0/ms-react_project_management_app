
export default function Task({task, projectList, setProjectList, renderedProject}) {

    function deleteTaskHandler(e){

        e.preventDefault();

        setProjectList((projectList) => [
            ...projectList.filter((project)=> project !== renderedProject),
            {
                ...renderedProject,
                tasks: renderedProject.tasks.filter((task)=> task !== e.target.value)
            }
        ])
        console.log(projectList)

    }



    return (
        <form key={task}>
            <label>{task}</label>
            <button onClick={(e)=>deleteTaskHandler(e)} value={task}>TEST CLICK ME!!!!!!!!!</button>
        </form>

    )
}