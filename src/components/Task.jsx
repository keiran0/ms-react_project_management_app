export default function Task({task, deleteTaskHandler}) {
    return (
        <form key={task}>
            <label>{task}</label>
            <button onClick={deleteTaskHandler} value={task}>Clear</button>
        </form>

    )
}