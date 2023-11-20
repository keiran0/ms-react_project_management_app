import { useRef } from 'react';

export default function NewProject({ handleCancel, handleAddProject }) {

    let title = useRef()
    let description = useRef();
    let date = useRef();

    function addProject() {
        let newProject = {
            title: title.current.value,
            description: description.current.value,
            dueDate: date.current.value,
            tasks: []
        }
        handleAddProject(newProject);
    }

    return (
        <>
            <div className="grid justify-items-end">
                <div>
                    <button className="mx-2"onClick={handleCancel}>Cancel</button>
                    <button className="bg-stone-800 rounded-md px-2 py-1 text-white" onClick={addProject}>Save</button>
                </div>
            </div>

            <label className="block">TITLE</label>
            <input className="block min-w-full mb-5 bg-stone-300" type="text" ref={title}></input>

            <label className="block">DESCRIPTION</label>
            <textarea className="block min-w-full mb-5 bg-stone-300" ref={description} ></textarea>

            <label className="block">DUE DATE</label>
            <input className="block min-w-full mb-5 bg-stone-300" type="date" ref={date}></input>
        </>
    )


}








