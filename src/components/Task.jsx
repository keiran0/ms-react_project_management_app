export default function Task({task, projectList, setProjectList, renderedProject}) {

    function deleteTaskHandler(e){

        e.preventDefault();
        let newProjectList = []

        projectList.forEach(function(project){
            if (project===renderedProject){
                let alteredProject = {
                    title:project.title,
                    description: project.description,
                    dueDate: project.dueDate,
                    tasks: []
                }

                project.tasks.forEach(function(task){
                    if (task===e.target.value) {

                    } else {
                        alteredProject.tasks.push(task)
                    }
                })
                newProjectList.push(alteredProject)
            } else {
                newProjectList.push(project);
            }
        })
        console.log(newProjectList)
        setProjectList(projectList => newProjectList);
        console.log(projectList);

    }

    return (
        <form key={task}>
            <label>{task}</label>
            <button onClick={(e)=>deleteTaskHandler(e)} value={task}>TEST CLICK ME!!!!!!!!!</button>
        </form>

    )
}