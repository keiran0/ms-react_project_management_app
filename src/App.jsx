import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import Project from './components/Project';
import NoProject from './components/NoProject';

import { useState } from 'react';

// let initialProjectList = [
//   { title: 'Placeholder Project', description: 'Lorem Ipsum 1', dueDate: Date.now(), tasks: [" project 1 placeholder task 1", "proj 1 placeholder task 2"] },
//   { title: 'Placeholder Project 2', description: 'Lorem Ipsum 2', dueDate: Date.now(), tasks: ["projec 2 placeholder task 1", "proj 2 placeholder task 2"] },
//   { title: 'Placeholder Project 3', description: 'Lorem Ipsum 3', dueDate: Date.now(), tasks: ["projec 3 placeholder task 1", "proj32 placeholder task 2"] }
// ]

let initialProjectList = []

function App() {

  const [projectList, setProjectList] = useState(initialProjectList);
  const [renderedProject, setRenderedProject] = useState(0); //maybe better to set this as derived value and set the usestate as index of the proj to be rendered.
  const [addingMode, setAddingMode] = useState(false);


  function createProjectHandler() {
    setAddingMode(true);
  }

  function projectSelectHandler(e) {
    projectList.forEach(function (project) {
      if (project.title === e.target.value) {
        setRenderedProject(projectList.indexOf(project));
      }
    })
  }

  function addProject(newProjectDetails) {
    let newProjectList = projectList;
    newProjectList.push(newProjectDetails)

    setProjectList(newProjectList)
    setAddingMode(false);

    setRenderedProject(projectList.indexOf(newProjectDetails))
  }

  function deleteProjectHandler() {
    let newProjectList = projectList.filter(project => project !== projectList[renderedProject])
    setProjectList(newProjectList)
    setRenderedProject(0)
  }

  function addTaskHandler(e) {
    let newList = [
      ...projectList.filter(project => project !== projectList[renderedProject]),
      {
        title: projectList[renderedProject].title,
        description: projectList[renderedProject].description,
        tasks: [
          ...projectList[renderedProject].tasks,
          e.current.value
        ]
      }
    ]

    setProjectList(newList)
    setRenderedProject(projectList.length - 1)

  }

  function deleteTaskHandler(e) {
    let newList = [
      ...projectList.filter(project => project != projectList[renderedProject]),
      {
        ...projectList[renderedProject],
        tasks: projectList[renderedProject].tasks.filter(task => task != e)
      }
    ]

    setProjectList(newList)
    setRenderedProject(projectList.length - 1)
  }

  return (
    <div className="flex w-screen min-h-screen">
      <Sidebar projectList={projectList} projectSelectHandler={projectSelectHandler} createHandler={createProjectHandler} />

      <div className="grow mx-6 my-10">
        {addingMode ? <NewProject handleCancel={() => setAddingMode(false)} handleAddProject={addProject} /> : null}
        {projectList.length < 1 & !addingMode ?
          <NoProject
            createHandler={createProjectHandler} />
          : null}
        {projectList.length > 0 & !addingMode ?
          <Project
            renderedProject={projectList[renderedProject]}
            deleteProjectHandler={deleteProjectHandler}
            addTaskHandler={addTaskHandler}
            deleteTaskHandler={deleteTaskHandler} />
          : null}
      </div>
    </div>
  );
}

export default App;
