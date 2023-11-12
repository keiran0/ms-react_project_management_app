import Sidebar from "./components/Sidebar";
import DisplayProject from "./components/DisplayProject";
import NewProject from "./components/NewProject";

import { useState } from 'react';



let projectList = [
  {title: 'Placeholder Project', description: 'Lorem Ipsum', dueDate: Date.now(), tasks:["placeholder task 1", "placeholder task 2"]},
  {title: 'Placeholder Project 2', description: 'Lorem Ipsum', dueDate: Date.now(), tasks:["placeholder task 1", "placeholder task 2"]}
]

// let projectList = []

function App() {

  const [renderedProject, setRenderedProject] = useState(projectList[0]);
  const [addingMode, setAddingMode] = useState(false);

  function createProjectHandler(){
    //console.log("clicked ADD PROJECT")
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
    projectList.push(newProjectDetails);
  }

  function deleteProjectHandler(){
    let index = projectList.indexOf(renderedProject);
    console.log("the rendered project is:")
    console.log(renderedProject)

    console.log("the rendered project index is:")
    console.log(index)

    console.log("the projectlist is:")
    console.log(projectList)

    console.log("the output is:")
    projectList = projectList.splice(index, 1);
    console.log(projectList)
  }

  function addTask(){

  }

  function removeTask(){

  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <Sidebar projectList={projectList} createHandler={createProjectHandler} projectSelectHandler={(e)=>projectSelectHandler(e)}/>

      {addingMode? 
      <NewProject handleCancel={()=>setAddingMode(false)} handleAddProject={addProject} projectList={projectList}/>:
      <DisplayProject projectList={projectList} createHandler={createProjectHandler} renderedProject={renderedProject} deleteHandler={deleteProjectHandler}/>}

    </>
  );
}

export default App;
