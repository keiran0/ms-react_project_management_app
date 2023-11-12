import image from '../assets/no-projects.png'

export default function NoProject({createHandler}){
    return(
        <>  
            <img src={image} alt="notepad on a clipboard"></img>
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one.</p>
            <button onClick={createHandler}>Create new project</button>
        </>
    )
}