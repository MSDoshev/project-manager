import ProjectCreate from "./assets/components/ProjectCreate/ProjectCreate";
import Sidebar from "./assets/components/Sidebar/Sidebar";

function App() {
  return (
    <main>
    <div className="flex flex-row h-screen w-full gap-7 bg-stone-200">
      <Sidebar/>
      <ProjectCreate/>
    </div>
    
    
    </main>
  );
}

export default App;
