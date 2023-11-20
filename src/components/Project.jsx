import Tasks from './Tasks'

export default function Project({
    renderedProject,
    deleteProjectHandler,
    addTaskHandler,
    deleteTaskHandler }) {

    return (
        <main>
            <div className="flex justify-between my-10">
                <div>
                    <h2 className="text-3xl font-bold mb-5">{renderedProject.title}</h2>
                    <p className="mb-5">{renderedProject.dueDate}</p>
                    <p>{renderedProject.description}</p>

                </div>
                <div>
                    <button onClick={deleteProjectHandler}>Delete</button>
                </div>

            </div>
            <Tasks renderedProject={renderedProject} addTask={addTaskHandler} deleteTaskHandler={deleteTaskHandler} />

        </main>
    )
}