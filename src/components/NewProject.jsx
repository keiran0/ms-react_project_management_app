import { useRef } from 'react';

    export default function NewProject({handleCancel, handleAddProject}){

        let title = useRef()
        let description = useRef();
        let date = useRef();

        function addProject(){
            let newProject = {
                title: title.current.value,
                description: description.current.value,
                dueDate: date.current.value,
                tasks: []
            }
            handleAddProject(newProject);
        }

        return (
            <div>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={addProject}>Save</button>
    
                <label>TITLE</label>
                <input type="text" ref={title}></input>
    
                <label>DESCRIPTION</label>
                <textarea ref={description} ></textarea>
    
                <label>DUE DATE</label>
                <input type="date" ref={date}></input>
            </div>
        )


    }




    



