import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import ProjectCreate from "./components/ProjectCreate/ProjectCreate";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });


  function handleStartAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const newProject ={
        ...projectData,
        id: Math.random()
      };
      return{
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  
  let content;

  if(projectsState.selectedProjectId === null){
    content = <ProjectCreate onAdd={handleAddProject}/>
  } else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main>
    <div className="flex flex-row h-screen w-full gap-7 bg-stone-200">
      <Sidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </div>
    
    
    </main>
  );
}

export default App;
