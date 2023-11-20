import image from '../assets/no-projects.png'

export default function NoProject({ createHandler }) {
    return (
        <div className="text-center">

            <img className="w-1/6 mx-auto my-10" src={image} alt="notepad on a clipboard"></img>
            <h2 className="font-semibold my-5">No Project Selected</h2>
            <p className="my-5">Select a project or get started with a new one.</p>
            <button className="bg-zinc-800 rounded-md px-2 py-1 text-white" onClick={createHandler}>Create new project</button>
        </div>
    )
}