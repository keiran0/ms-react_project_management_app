import Sidebar from "./components/Sidebar";
import DisplayProject from "./components/DisplayProject";
import NewProject from "./components/NewProject";

import { useState } from 'react';



let initialProjectList = [
  {title: 'Placeholder Project', description: 'Lorem Ipsum 1', dueDate: Date.now(), tasks:[" project 1 placeholder task 1", "proj 1 placeholder task 2"]},
  {title: 'Placeholder Project 2', description: 'Lorem Ipsum 2', dueDate: Date.now(), tasks:["projec 2 placeholder task 1", "proj 2 placeholder task 2"]},
  {title: 'Placeholder Project 3', description: 'Lorem Ipsum 3', dueDate: Date.now(), tasks:["projec 3 placeholder task 1", "proj32 placeholder task 2"]}
]

// let initialProjectList = []

function App() {

  const [projectList, setProjectList] = useState(initialProjectList);
  const [renderedProject, setRenderedProject] = useState(projectList[0]); //maybe better to set this as derived value and set the usestate as index of the proj to be rendered.
  const [addingMode, setAddingMode] = useState(false);


  function createProjectHandler(){
    setAddingMode(true);
  }

  function projectSelectHandler(e){
    projectList.forEach(function(project){
      if (project.title === e.target.value){
        setRenderedProject(project);
      }
    })
  }

  function addProject(newProjectDetails){
    let newProjectList = projectList;
    newProjectList.push(newProjectDetails)

    setProjectList(newProjectList)
    setAddingMode(false);

    setRenderedProject(newProjectDetails)
  }

  function deleteProjectHandler(){
    setProjectList(projectList.filter(project => project !== renderedProject))
    setRenderedProject(projectList[0])
  }


  function debugHandler(){
    console.log(projectList)
  }

  function addTask(){
    console.log("task added")
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <Sidebar projectList={projectList} createHandler={createProjectHandler} projectSelectHandler={(e)=>projectSelectHandler(e)}/>

      {
        addingMode? 
        <NewProject 
          handleCancel={()=>setAddingMode(false)} 
          handleAddProject={addProject} 
          projectList={projectList}/>:
        <DisplayProject 
          projectList={projectList} 
          setProjectList={setProjectList}
          createHandler={createProjectHandler} 
          renderedProject={renderedProject} 
          deleteProjectHandler={deleteProjectHandler}
          addTaskHandler={addTask}
          />
      }


      <hr></hr>
      <button onClick={debugHandler}>DEBUGGGGGGGGGGGGGGGGGGGGGG</button>
    </>
  );
}

export default App;
